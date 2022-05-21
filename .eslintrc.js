module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "prettier/react",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
      },
    ],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "indent": "off",
    "no-await-in-loop": "off",
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "func-names": ["warn", "never"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/display-name": "off",
    "react/prop-types": "off",
    "camelcase": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
