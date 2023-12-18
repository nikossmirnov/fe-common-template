module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    'airbnb',
    'airbnb-typescript'
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
      project: './tsconfig.json'
  },
  "plugins": [
    "react",
    "i18next"
  ],
  "rules": {
    "indent": [2],
    "react/jsx-indent": [2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "i18next/no-literal-string": ["error", { markUpOnly: true }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    "react/function-component-definition": "off",
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
  }
}
