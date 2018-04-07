// https://cn.eslint.org/docs/rules/
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  'extends': [
    'plugin:react/recommended', // 解决已使用，但是报未定义的错误
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true, // 支持 Object spread https://eslint.org/docs/user-guide/configuring#specifying-parser-options
      "jsx": true,
      "modules": true
    }
  },
  "rules": {
    "indent": 0,
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "never"],
    "react/prop-types": ["ignore"], // 干掉 react-prop，日后再补~
    "react/display-name": ["ignore"],
  },
}