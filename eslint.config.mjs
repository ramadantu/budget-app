import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";


export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    {
      ignores: [
        "**/dist/**",
      ],
      rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      }
    }
]);
