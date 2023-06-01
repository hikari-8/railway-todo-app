module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off", // prop-typesのチェックを無効にする
  },
};
