const es6 = require('./es6');


const plugins = [
  'react'
];


const env = Object.assign({}, es6.env, {
  browser: true
});


const parserOptions = Object.assign({}, es6.parserOptions, {
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true
  }
});


const rules = Object.assign({}, es6.rules, {
  'jsx-quotes': [
    2,
    'prefer-double'
  ],

  // https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules
  'react/display-name': 0,
  'react/forbid-component-props': [
    2,
    {
      forbid: [
        'style'
      ]
    }
  ],
  'react/forbid-prop-types': 2,
  'react/no-children-prop': 2,
  'react/no-danger': 2,
  // Implied by react/no-danger
  'react/no-danger-with-children': 0,
  'react/no-deprecated': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-find-dom-node': 2,
  // Implied by react/prefer-es6-class
  'react/no-is-mounted': 0,
  'react/no-multi-comp': 2,
  'react/no-render-return-value': 2,
  'react/no-set-state': 0,
  'react/no-string-refs': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unknown-property': 2,
  'react/no-unused-prop-types': 2,
  'react/prefer-es6-class': 2,
  'react/prefer-stateless-function': 2,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 2,
  'react/require-optimization': 0,
  'react/require-render-return': 2,
  'react/self-closing-comp': 2,
  'react/sort-comp': 2,
  'react/sort-prop-types': 0,
  // Can't occur due to react/forbid-component-props
  'react/style-prop-object': 0,

  // https://www.npmjs.com/package/eslint-plugin-react#jsx-specific-rules
  'react/jsx-boolean-value': 2,
  'react/jsx-closing-bracket-location': 2,
  'react/jsx-curly-spacing': 2,
  'react/jsx-equals-spacing': 2,
  'react/jsx-filename-extension': 2,
  'react/jsx-first-prop-new-line': [
    2,
    'multiline'
  ],
  'react/jsx-handler-names': 0,
  'react/jsx-indent': [
    2,
    2
  ],
  'react/jsx-indent-props': [
    2,
    2
  ],
  'react/jsx-key': 2,
  'react/jsx-max-props-per-line': [
    2,
    {
      maximum: 3
    }
  ],
  'react/jsx-no-bind': [
    2,
    {
      allowArrowFunctions: true
    }
  ],
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-literals': 0,
  'react/jsx-no-target-blank': 2,
  'react/jsx-no-undef': 2,
  'react/jsx-pascal-case': 2,
  'react/jsx-sort-props': 0,
  'react/jsx-space-before-closing': 2,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/jsx-wrap-multilines': 2
});


module.exports = {
  plugins,
  env,
  parserOptions,
  rules
};
