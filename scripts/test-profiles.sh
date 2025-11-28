#!/bin/bash
set -e

echo "Testing ESLint profiles..."

# Create temp test directory
TEST_DIR=$(mktemp -d)
trap "rm -rf $TEST_DIR" EXIT

cd $TEST_DIR

# Helper function
test_profile() {
  local profile=$1
  local test_file=$2
  local expected_rule=$3
  local should_error=$4

  echo "Testing $profile profile..."

  # Create eslint config
  cat > eslint.config.mjs << EOF
import { $profile } from '$(cd $OLDPWD && pwd)/index.js';
export default $profile;
EOF

  # Create tsconfig
  cat > tsconfig.json << 'EOF'
{"compilerOptions":{"strict":true,"module":"ESNext","moduleResolution":"bundler"},"include":["src"]}
EOF

  mkdir -p src
  echo "$test_file" > src/test.ts

  # Run eslint
  if $should_error; then
    if npx eslint src/test.ts 2>&1 | grep -q "$expected_rule"; then
      echo "  ✓ $expected_rule triggered as expected"
    else
      echo "  ✗ Expected $expected_rule error not found"
      npx eslint src/test.ts 2>&1 || true
      exit 1
    fi
  else
    if npx eslint src/test.ts 2>&1 | grep -q "$expected_rule"; then
      echo "  ✗ $expected_rule should NOT trigger"
      exit 1
    else
      echo "  ✓ $expected_rule not triggered as expected"
    fi
  fi

  rm -rf src eslint.config.mjs tsconfig.json
}

# Test 1: All profiles should catch unused vars
echo ""
echo "=== Test: unused vars ==="
test_profile "next" "const unused = 1;" "no-unused-vars" true

# Test 2: All profiles should ignore _prefixed vars
echo ""
echo "=== Test: _prefixed vars ignored ==="
test_profile "next" "const _unused = 1; export {};" "no-unused-vars" false

# Test 3: ts-package allows barrel exports
echo ""
echo "=== Test: ts-package allows barrels ==="
mkdir -p src
echo "export const foo = 1;" > src/foo.ts
test_profile "tsPackage" "export * from './foo';" "barrel" false
rm -rf src

# Test 4: node-service bans barrel exports
echo ""
echo "=== Test: node-service bans barrels ==="
mkdir -p src
echo "export const foo = 1;" > src/foo.ts
test_profile "nodeService" "export * from './foo';" "barrel" true
rm -rf src

echo ""
echo "All tests passed!"
