import globals from "globals"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unicorn from "eslint-plugin-unicorn"
import perfectionist from "eslint-plugin-perfectionist"
import tseslint from "typescript-eslint"
import tsParser from "@typescript-eslint/parser"
import prettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      unicorn,
      perfectionist,
      prettier,
    },
    rules: {
      "prettier/prettier": ["error"],
      ...reactRefresh.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      "unicorn/filename-case": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "ignore", propElementValues: "always" }],
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: { type: { react: "react" }, value: { react: ["react", "react-*"] } },
          groups: ["type", "react", ["builtin", "external"], "internal-type", "internal", "side-effect", "style"],
          newlinesBetween: "always",
          order: "asc",
          type: "alphabetical"
        }
      ],
      ...eslintConfigPrettier.rules
    }
  }
]
