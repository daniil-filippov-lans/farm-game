module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    "airbnb",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  "plugins": [
    "react",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}