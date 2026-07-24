import js from '@eslint/js';
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import { defineConfig } from "@eslint/config-helpers";
import vueParser from "vue-eslint-parser";
import pluginVue from 'eslint-plugin-vue';

export default defineConfig([
  {
    ignores: ["dist/", "build/", "node_modules/*", "**/temp/"],
  },
  {
    extends: [
      js.configs.recommended,
      ...pluginVue.configs['flat/vue2-recommended'],
    ],
    files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        // Prevents ESLint from looking for a separate babel.config.js file
        requireConfigFile: false, 
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: [
            "@babel/preset-env",
            // '@vue/cli-plugin-babel/preset'
          ] 
        },
    },
    },
    rules: {
      "no-constant-binary-expression": 'off',
      "no-empty-static-block": 'off',
      "no-new-native-nonconstructor": 'off',
      "no-unused-private-class-members": 'off'
    },
  }
]);
