/* eslint-disable @stylistic/quotes */
import { defineConfig } from 'eslint/config';
import stylistic from "@stylistic/eslint-plugin";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    ignores: ["build/*", "dist/*"]
}, ...compat.extends("plugin:@typescript-eslint/recommended"), {
    plugins: {
        "@stylistic": stylistic,
        "@stylistic/ts": stylisticTs,
        "@typescript-eslint": typescriptEslint
    },

    languageOptions: {
        globals: {
            ...globals.browser
        }
    },

    rules: {
        "@stylistic/array-bracket-newline": ["error", "consistent"],
        "@stylistic/array-bracket-spacing": ["error", "never"],
        "@stylistic/arrow-parens": ["error", "always"],

        "@stylistic/arrow-spacing": ["error", {
            before: true,
            after: true
        }],

        "@stylistic/comma-dangle": ["error", "never"],

        "@stylistic/comma-spacing": ["error", {
            before: false,
            after: true
        }],

        "@stylistic/comma-style": ["error", "last"],
        "@stylistic/computed-property-spacing": ["error", "never"],
        "@stylistic/dot-location": ["error", "property"],
        "@stylistic/eol-last": ["error", "always"],
        "@stylistic/func-call-spacing": ["error", "never"],
        "@stylistic/function-call-argument-newline": ["error", "consistent"],
        "@stylistic/implicit-arrow-linebreak": ["error", "beside"],

        "indent": ["error", 4, {
            SwitchCase: 1
        }],

        "@stylistic/key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
            mode: "strict"
        }],

        "@stylistic/linebreak-style": ["error", "unix"],

        "@stylistic/member-delimiter-style": ["error", {
            multiline: {
                delimiter: "comma",
                requireLast: false
            },

            singleline: {
                delimiter: "comma",
                requireLast: false
            },

            overrides: {
                interface: {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    }
                }
            }
        }],

        "@stylistic/new-parens": ["error", "always"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/no-extra-semi": "error",

        "@stylistic/semi-spacing": ["error", {
            before: false,
            after: true
        }],

        "@stylistic/semi-style": ["error", "last"],

        "@stylistic/no-trailing-spaces": ["error", {
            skipBlankLines: false,
            ignoreComments: false
        }],

        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/quote-props": ["error", "consistent"],

        "@stylistic/quotes": ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],

        "@stylistic/rest-spread-spacing": ["error", "never"],
        "@stylistic/space-before-blocks": ["error", "always"],

        "@stylistic/space-before-function-paren": ["error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
        }],

        "@stylistic/space-in-parens": ["error", "never"],
        "@stylistic/spaced-comment": ["error", "always"],

        "@stylistic/switch-colon-spacing": ["error", {
            before: false,
            after: true
        }],

        "@stylistic/template-curly-spacing": ["error", "never"],

        "@stylistic/ts/type-annotation-spacing": ["error", {
            before: false,
            after: true,

            overrides: {
                arrow: {
                    before: true,
                    after: true
                }
            }
        }],

        "@stylistic/type-generic-spacing": "error",
        "@stylistic/type-named-tuple-spacing": "error",
        "@stylistic/wrap-regex": "error",

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_"
        }]
    }
}]);
