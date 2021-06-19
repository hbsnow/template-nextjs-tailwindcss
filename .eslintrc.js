/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */

const config = {
  extends: ["prettier", "next", "next/core-web-vitals"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  // overrides: [
  //   {
  //     files: ["**/*.{ts,tsx}"],
  //     extends: [
  //       "eslint:recommended",
  //       "plugin:react/recommended",
  //       "plugin:@typescript-eslint/recommended",
  //       "prettier",
  //     ],
  //     parser: "@typescript-eslint/parser",
  //     settings: {
  //       react: {
  //         pragma: "React",
  //         version: "detect",
  //       },
  //     },
  //     parserOptions: {
  //       sourceType: "module",
  //       project: "./tsconfig.json",
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //     plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
  //     rules: {
  //       "no-unused-vars": "off",
  //       "@typescript-eslint/no-unused-vars": "error",
  //       "react/jsx-no-target-blank": "error",
  //       "react/prop-types": "off",
  //       "react-hooks/rules-of-hooks": "error",
  //       "react-hooks/exhaustive-deps": "error",
  //     },
  //   },
  // ],
  // globals: {
  //   React: "writable",
  // },
};

module.exports = config;
