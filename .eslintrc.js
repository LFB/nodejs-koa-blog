module.exports = {
    root: true,
    env: {
        node: true
    },
    rules: {
        'no-console': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-vars': 'off',
        'css-ruleorselectorexpected': 'off',
        // allow debugger in development
        'no-debugger': 'off',
        // allow alert in development
        'no-alert': 'off',
        // max nest callback 3
        'max-nested-callbacks': ['error', 4],
        // allow modify param property
        'no-param-reassign': ['error', { props: false }],
        //eslint-plugin-prettier插件配置,报告prettier中不符合的格式
        // 'prettier/prettier': [
        //     'warn',
        //     {
        //         usePrettierrc: true
        //     }
        // ],
        'vue/component-name-in-template-casing': [
            0,
            'PascalCase' | 'kebab-case',
            {
                ignores: []
            }
        ],
        'vue/no-mutating-props': 'off',
        'vue/html-quotes': 'error',
        'vue/no-confusing-v-for-v-if': 'error',
        'vue/order-in-components': 'warn',
        'vue/this-in-template': 'warn',
        'vue/html-self-closing': 'off',
        //disallow line breaks before the closing bracket.
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        //属性排序
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ]
            }
        ],
        //属性换行
        'vue/max-attributes-per-line': [
            'off',
            {
                singleline: 2,
                multiline: {
                    max: 1,
                    allowFirstLine: false //不允许首行属性
                }
            }
        ],
        'vue/html-indent': [
            'error',
            4, // vue html 4个缩进
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 1,
                ignores: []
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ['plugin:vue/strongly-recommended', '@vue/prettier']
}
