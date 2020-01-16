module.exports = {
  "root": true,
  "extends": '@react-native-community',
  "rules": {
    // "indent": ["error", 4, {"SwitchCase": 1}],
    // "react/jsx-indent": ["error", 4],
    // "react/jsx-indent-props": ["error", 4],
    "prettier/prettier": ["error",{"tabWidth": 4,}], //覆蓋prettier配置，上面三行編輯器處理有bug
  },
  "globals": {
    __DEV__: true,
    console: false,
  }
};