const common = require('.');


const env = {
  es6: true,
  node: true
};


const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};


const rules = Object.assign({
  // http://eslint.org/docs/rules/#ecmascript-6
  // Yet to be determined.
}, common.rules);


module.exports = {
  env,
  parserOptions,
  rules
};
