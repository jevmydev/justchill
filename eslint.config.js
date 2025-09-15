import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import babelParser from "@babel/eslint-parser";

const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error"
};

export default [
    prettier,
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"]
                }
            }
        },
        plugins: {
            react: reactPlugin,
            "react-refresh": reactRefresh,
            "react-hooks": reactHooks
        },
        settings: {
            react: { version: "detect" }
        },
        rules: {
            "react-hooks/rules-of-hooks": RULES.ERROR,
            "react-hooks/exhaustive-deps": RULES.WARN,
            "react/display-name": RULES.OFF,
            "react/react-in-jsx-scope": RULES.OFF,
            "react/prop-types": RULES.OFF,
            indent: [RULES.WARN, 4, { SwitchCase: 1 }],
            quotes: [RULES.WARN, "double"],
            semi: [RULES.WARN, "always"],
            "linebreak-style": RULES.OFF
        },
        ignores: ["dist", "eslint.config.cjs"]
    }
];
