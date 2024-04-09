module.exports = {
  extends: [
    'eslint-config-standard'
  ],
  ignorePatterns: ['src/js/vendor/'],
  "env": {
    "browser": true
  },
  rules: {
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
}
