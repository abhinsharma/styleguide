/**
 * Prettier configuration
 * Consistent code formatting rules across all projects.
 *
 * @type {import('prettier').Config}
 */
export default {
  // Disable semicolons at the ends of statements
  semi: false,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Number of spaces per indentation level
  tabWidth: 2,

  // Print trailing commas in ES5 compatible locations
  trailingComma: 'es5',

  // Specify the line length that the printer will wrap on
  printWidth: 160,

  // Always include parentheses around arrow function parameters
  arrowParens: 'always',
};
