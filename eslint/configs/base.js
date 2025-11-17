/**
 * Base ESLint configuration with general coding style rules.
 * This config is framework-agnostic and can be used in any JavaScript/TypeScript project.
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'styleguide/base',
    rules: {
      // ============ General Coding Styles ============

      // Disallow unexpected multiline expressions
      'no-unexpected-multiline': 'error',

      // Disallow labels that share a name with a variable in scope
      'no-label-var': 'error',

      // Disallow initializing variables to `undefined`
      'no-undef-init': 'error',

      // Disallow unused variables (will be overridden by TypeScript config)
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: false,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      // Disallow use of bitwise operators
      'no-bitwise': 'error',

      // Disallow if as the only statement in an else block
      'no-lonely-if': 'error',

      // Disallow use of chained assignment expressions
      'no-multi-assign': ['error'],

      // Disallow nested ternary expressions
      'no-nested-ternary': 'error',

      // Disallow unnecessary `.call()` and `.apply()`
      'no-useless-call': 'error',

      // Disallow ternary operators when simpler alternatives exist
      'no-unneeded-ternary': 'error',

      // Disallow the use of console
      'no-console': 'error',

      // Disallow expressions where the operation doesn't affect the value
      'no-constant-binary-expression': 'error',

      // Disallow returning values from Promise executor functions
      'no-promise-executor-return': 'error',

      // Disallow template literal placeholder syntax in regular strings
      'no-template-curly-in-string': 'error',

      // Disallow loops with a body that allows only one iteration
      'no-unreachable-loop': 'error',

      // Require return statements in array methods callbacks
      'array-callback-return': ['error', { allowImplicit: true }],

      // Treat `var` statements as if they were block scoped
      'block-scoped-var': 'error',

      // Require curly braces for multiline blocks
      curly: ['error', 'multi-line'],

      // Require default clauses in switch statements to be last (if used)
      'default-case-last': 'error',

      // Require triple equals (`===` and `!==`)
      eqeqeq: 'error',

      // Require grouped accessor pairs in object literals and classes
      'grouped-accessor-pairs': 'error',

      // Disallow use of `alert()`
      'no-alert': 'error',

      // Disallow use of `caller`/`callee`
      'no-caller': 'error',

      // Disallow returning value in constructor
      'no-constructor-return': 'error',

      // Disallow using an `else` if the `if` block contains a return
      'no-else-return': 'error',

      // Disallow `eval()`
      'no-eval': 'error',

      // Disallow extending native objects
      'no-extend-native': 'error',

      // Disallow unnecessary function binding
      'no-extra-bind': 'error',

      // Disallow use of `eval()`-like methods
      'no-implied-eval': 'error',

      // Disallow floating decimals
      'no-floating-decimal': 'error',

      // Disallow usage of `__iterator__` property
      'no-iterator': 'error',

      // Disallow unnecessary nested blocks
      'no-lone-blocks': 'error',

      // Disallow `new` for side effects
      'no-new': 'error',

      // Disallow function constructors
      'no-new-func': 'error',

      // Disallow primitive wrapper instances, such as `new String('foo')`
      'no-new-wrappers': 'error',

      // Disallow use of octal escape sequences in string literals
      'no-octal-escape': 'error',

      // Disallow reassignment of function parameters
      'no-param-reassign': 'error',

      // Disallow usage of the deprecated `__proto__` property
      'no-proto': 'error',

      // Disallow assignment in `return` statement
      'no-return-assign': 'error',

      // Disallow comparisons where both sides are exactly the same
      'no-self-compare': 'error',

      // ============ Opinionated Coding Styles ============

      // Prefer literal template
      'prefer-template': 'error',

      // Use `Boolean(foo)` instead of `!!foo` for consistency
      'no-implicit-coercion': 'error',

      // Disallow unnecessary concatenation of strings
      'no-useless-concat': 'error',

      // Disallow redundant return statements
      'no-useless-return': 'error',

      // Disallow magic numbers
      'no-magic-numbers': [
        'off',
        {
          detectObjects: false,
          enforceConst: true,
          ignore: [-1, 0, 1, 2, -2],
          ignoreArrayIndexes: false,
        },
      ],

      // Require using Error objects as Promise rejection reasons
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

      // Disable when its used before func call
      'no-void': ['error', { allowAsStatement: true }],

      // Disable loop condition checking
      'no-unmodified-loop-condition': 'off',
    },
  },
];
