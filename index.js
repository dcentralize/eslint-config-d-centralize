const rules = {
  // http://eslint.org/docs/rules/#possible-errors
  'no-cond-assign': 2,
  'no-console': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty-character-class': 2,
  'no-empty': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': [
    2,
    'functions'
  ],
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declarations': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-obj-calls': 2,
  'no-prototype-builtins': 0,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 0,
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,

  // http://eslint.org/docs/rules/#best-practices
  'accessor-pairs': [
    2,
    {
      getWithoutSet: false,
      setWithoutGet: true
    }
  ],
  'array-callback-return': 0,
  'block-scoped-var': 2,
  'class-methods-use-this': 0,
  complexity: 0,
  'consistent-return': 0,
  curly: [
    2,
    'all'
  ],
  'default-case': 0,
  'dot-location': [
    2,
    'property'
  ],
  'dot-notation': 2,
  eqeqeq: 2,
  'guard-for-in': 0,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 0,
  'no-else-return': 2,
  'no-empty-function': 0,
  'no-empty-pattern': 2,
  'no-eq-null': 2,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-global-assign': 2,
  'no-implicit-coercion': 2,
  'no-implicit-globals': 0,
  'no-implied-eval': 2,
  'no-invalid-this': 0,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-new': 0,
  'no-octal-escape': 2,
  'no-octal': 2,
  'no-param-reassign': 0,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-restricted-properties': 0,
  'no-return-assign': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-void': 2,
  'no-warning-comments': 0,
  'no-with': 2,
  radix: 0,
  'vars-on-top': 0,
  'wrap-iife': [
    2,
    'outside'
  ],
  yoda: 2,

  // http://eslint.org/docs/rules/#strict-mode
  strict: [
    2,
    'global'
  ],

  // http://eslint.org/docs/rules/#variables
  'init-declarations': 0,
  'no-catch-shadow': 2,
  'no-delete-var': 2,
  // Can't occur, because 'no-labels' is enabled.
  'no-label-var': 0,
  'no-restricted-globals': 0,
  'no-shadow-restricted-names': 2,
  'no-shadow': 2,
  'no-undef-init': 2,
  'no-undef': 2,
  'no-undefined': 0,
  'no-unused-vars': [
    2,
    {
      vars: 'all',
      args: 'after-used'
    }
  ],
  'no-use-before-define': [
    2,
    'nofunc'
  ],

  // http://eslint.org/docs/rules/#nodejs-and-commonjs
  'callback-return': 2,
  'global-require': 0,
  'handle-callback-err': [
    2,
    '^(e|err|error)$'
  ],
  'no-mixed-requires': [
    2,
    true
  ],
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 0,
  'no-process-exit': 2,
  'no-restricted-modules': 0,
  'no-sync': 2,

  // http://eslint.org/docs/rules/#stylistic-issues
  'array-bracket-spacing': [
    2,
    'never'
  ],
  'block-spacing': [
    2,
    'never'
  ],
  'brace-style': [
    2,
    '1tbs',
    {
      allowSingleLine: false
    }
  ],
  camelcase: [
    2,
    {
      properties: 'always'
    }
  ],
  'comma-dangle': [
    2,
    'never'
  ],
  'comma-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  'comma-style': [
    2,
    'last'
  ],
  'computed-property-spacing': [
    2,
    'never'
  ],
  'consistent-this': 0,
  'eol-last': 2,
  'func-call-spacing': 2,
  'func-name-matching': 2,
  'func-names': 0,
  'func-style': [
    2,
    'declaration',
    {
      allowArrowFunctions: true
    }
  ],
  'id-blacklist': 0,
  'id-length': 0,
  'id-match': 0,
  indent: [
    2,
    2,
    {
      SwitchCase: 1,
      MemberExpression: 1
    }
  ],
  'jsx-quotes': 0,
  'key-spacing': [
    2,
    {
      beforeColon: false,
      afterColon: true
    }
  ],
  'keyword-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  'line-comment-position': 0,
  'linebreak-style': 2,
  'lines-around-comment': 0,
  'lines-around-directive': 0,
  'max-depth': 0,
  'max-len': [
    2,
    120,
    4,
    {
      ignoreComments: false,
      ignoreUrls: true
    }
  ],
  'max-lines': 0,
  'max-nested-callbacks': 0,
  'max-params': 0,
  'max-statements-per-line': 0,
  'max-statements': 0,
  'multiline-ternary': 0,
  'new-cap': 2,
  'new-parens': 2,
  'newline-after-var': 0,
  'newline-before-return': 0,
  'newline-per-chained-call': 0,
  'no-array-constructor': 2,
  'no-bitwise': 0,
  'no-continue': 0,
  'no-inline-comments': 0,
  'no-lonely-if': 2,
  'no-mixed-operators': 0,
  // Implied by 'indent'
  'no-mixed-spaces-and-tabs': 0,
  'no-multiple-empty-lines': [
    2,
    {
      max: 2
    }
  ],
  'no-negated-condition': 0,
  'no-nested-ternary': 2,
  'no-new-object': 2,
  'no-plusplus': 0,
  'no-restricted-syntax': 0,
  'no-tabs': 2,
  'no-ternary': 0,
  'no-trailing-spaces': 2,
  'no-underscore-dangle': 0,
  'no-unneeded-ternary': 2,
  'no-whitespace-before-property': 2,
  'object-curly-newline': 0,  // XXX Might be a good idea actually.
  'object-curly-spacing': [
    2,
    'never'
  ],
  'object-property-newline': 0,  // XXX Might be a good idea actually.
  'one-var-declaration-per-line': 2,
  'one-var': [
    2,
    'never'
  ],
  'operator-assignment': [
    2,
    'always'
  ],
  'operator-linebreak': [
    2,
    'after'
  ],
  'padded-blocks': [
    2,
    'never'
  ],
  'quote-props': [
    2,
    'as-needed'
  ],
  quotes: [
    2,
    'single',
    'avoid-escape'
  ],
  'require-jsdoc': 0,
  'semi-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  semi: 2,
  'sort-keys': 0,
  'sort-vars': [
    2,
    {
      ignoreCase: true
    }
  ],
  'space-before-blocks': [
    2,
    'always'
  ],
  'space-before-function-paren': [
    2,
    'never'
  ],
  'space-in-parens': [
    2,
    'never'
  ],
  'space-infix-ops': 2,
  'space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false
    }
  ],
  'spaced-comment': [
    2,
    'always'
  ],
  'unicode-bom': 2,
  'wrap-regex': 0
};


module.exports = {
  rules
};
