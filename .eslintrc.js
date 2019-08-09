// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    '@vue/standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 圆括号后不要有空格 如 import(/* webpackChunkName: "Detail" */ './views/Detail.vue')
    'space-in-parens': 'off',
    // import (/* webpackChunkName: 'Detail' */ './views/Detail.vue') 这种会报错，忽略
    // https: //eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'off',
    // 函数小括号(前要有空格
    'space-before-function-paren': 'off',
    'newIsCap': 'off',
    "standard/computed-property-even-spacing": 'off'
  }
}
