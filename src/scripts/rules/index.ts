/** ESLintルール情報 */
type ESLintRule = {
  /** ESLint Rule ID */
  id: string;
}

const rules: ESLintRule[] = [
  /** @see http://eslint.org/docs/rules/accessor-pairs */
  {
    id: 'accessor-pairs',
  },
  /** @see http://eslint.org/docs/rules/array-bracket-newline */
  {
    id: 'array-bracket-newline',
  },
  /** @see http://eslint.org/docs/rules/array-bracket-spacing */
  {
    id: 'array-bracket-spacing',
  },
  /** @see http://eslint.org/docs/rules/array-callback-return */
  {
    id: 'array-callback-return',
  },
  /** @see http://eslint.org/docs/rules/array-element-newline */
  {
    id: 'array-element-newline',
  },
  /** @see http://eslint.org/docs/rules/arrow-body-style */
  {
    id: 'arrow-body-style',
  },
  /** @see http://eslint.org/docs/rules/arrow-parens */
  {
    id: 'arrow-parens',
  },
  /** @see http://eslint.org/docs/rules/arrow-spacing */
  {
    id: 'arrow-spacing',
  },
  /** @see http://eslint.org/docs/rules/block-scoped-var */
  {
    id: 'block-scoped-var',
  },
  /** @see http://eslint.org/docs/rules/block-spacing */
  {
    id: 'block-spacing',
  },
  /** @see http://eslint.org/docs/rules/brace-style */
  {
    id: 'brace-style',
  },
  /** @see http://eslint.org/docs/rules/callback-return */
  {
    id: 'callback-return',
  },
  /** @see http://eslint.org/docs/rules/camelcase */
  {
    id: 'camelcase',
  },
  /** @see http://eslint.org/docs/rules/capitalized-comments */
  {
    id: 'capitalized-comments',
  },
  /** @see http://eslint.org/docs/rules/class-methods-use-this */
  {
    id: 'class-methods-use-this',
  },
  /** @see http://eslint.org/docs/rules/comma-dangle */
  {
    id: 'comma-dangle',
  },
  /** @see http://eslint.org/docs/rules/comma-spacing */
  {
    id: 'comma-spacing',
  },
  /** @see http://eslint.org/docs/rules/comma-style */
  {
    id: 'comma-style',
  },
  /** @see http://eslint.org/docs/rules/complexity */
  {
    id: 'complexity',
  },
  /** @see http://eslint.org/docs/rules/computed-property-spacing */
  {
    id: 'computed-property-spacing',
  },
  /** @see http://eslint.org/docs/rules/consistent-return */
  {
    id: 'consistent-return',
  },
  /** @see http://eslint.org/docs/rules/consistent-this */
  {
    id: 'consistent-this',
  },
  /** @see http://eslint.org/docs/rules/constructor-super */
  {
    id: 'constructor-super',
  },
  /** @see http://eslint.org/docs/rules/curly */
  {
    id: 'curly',
  },
  /** @see http://eslint.org/docs/rules/default-case */
  {
    id: 'default-case',
  },
  /** @see http://eslint.org/docs/rules/default-param-last */
  {
    id: 'default-param-last',
  },
  /** @see http://eslint.org/docs/rules/dot-location */
  {
    id: 'dot-location',
  },
  /** @see http://eslint.org/docs/rules/dot-notation */
  {
    id: 'dot-notation',
  },
  /** @see http://eslint.org/docs/rules/eol-last */
  {
    id: 'eol-last',
  },
  /** @see http://eslint.org/docs/rules/eqeqeq */
  {
    id: 'eqeqeq',
  },
  /** @see http://eslint.org/docs/rules/for-direction */
  {
    id: 'for-direction',
  },
  /** @see http://eslint.org/docs/rules/func-call-spacing */
  {
    id: 'func-call-spacing',
  },
  /** @see http://eslint.org/docs/rules/func-name-matching */
  {
    id: 'func-name-matching',
  },
  /** @see http://eslint.org/docs/rules/func-names */
  {
    id: 'func-names',
  },
  /** @see http://eslint.org/docs/rules/func-style */
  {
    id: 'func-style',
  },
  /** @see http://eslint.org/docs/rules/function-call-argument-newline */
  {
    id: 'function-call-argument-newline',
  },
  /** @see http://eslint.org/docs/rules/function-paren-newline */
  {
    id: 'function-paren-newline',
  },
  /** @see http://eslint.org/docs/rules/generator-star-spacing */
  {
    id: 'generator-star-spacing',
  },
  /** @see http://eslint.org/docs/rules/getter-return */
  {
    id: 'getter-return',
  },
  /** @see http://eslint.org/docs/rules/global-require */
  {
    id: 'global-require',
  },
  /** @see http://eslint.org/docs/rules/grouped-accessor-pairs */
  {
    id: 'grouped-accessor-pairs',
  },
  /** @see http://eslint.org/docs/rules/guard-for-in */
  {
    id: 'guard-for-in',
  },
  /** @see http://eslint.org/docs/rules/handle-callback-err */
  {
    id: 'handle-callback-err',
  },
  /** @see http://eslint.org/docs/rules/id-blacklist */
  {
    id: 'id-blacklist',
  },
  /** @see http://eslint.org/docs/rules/id-length */
  {
    id: 'id-length',
  },
  /** @see http://eslint.org/docs/rules/id-match */
  {
    id: 'id-match',
  },
  /** @see http://eslint.org/docs/rules/implicit-arrow-linebreak */
  {
    id: 'implicit-arrow-linebreak',
  },
  /** @see http://eslint.org/docs/rules/indent */
  {
    id: 'indent',
  },
  /** @see http://eslint.org/docs/rules/init-declarations */
  {
    id: 'init-declarations',
  },
  /** @see http://eslint.org/docs/rules/jsx-quotes */
  {
    id: 'jsx-quotes',
  },
  /** @see http://eslint.org/docs/rules/key-spacing */
  {
    id: 'key-spacing',
  },
  /** @see http://eslint.org/docs/rules/keyword-spacing */
  {
    id: 'keyword-spacing',
  },
  /** @see http://eslint.org/docs/rules/line-comment-position */
  {
    id: 'line-comment-position',
  },
  /** @see http://eslint.org/docs/rules/linebreak-style */
  {
    id: 'linebreak-style',
  },
  /** @see http://eslint.org/docs/rules/lines-around-comment */
  {
    id: 'lines-around-comment',
  },
  /** @see http://eslint.org/docs/rules/lines-between-class-members */
  {
    id: 'lines-between-class-members',
  },
  /** @see http://eslint.org/docs/rules/max-classes-per-file */
  {
    id: 'max-classes-per-file',
  },
  /** @see http://eslint.org/docs/rules/max-depth */
  {
    id: 'max-depth',
  },
  /** @see http://eslint.org/docs/rules/max-len */
  {
    id: 'max-len',
  },
  /** @see http://eslint.org/docs/rules/max-lines */
  {
    id: 'max-lines',
  },
  /** @see http://eslint.org/docs/rules/max-lines-per-function */
  {
    id: 'max-lines-per-function',
  },
  /** @see http://eslint.org/docs/rules/max-nested-callbacks */
  {
    id: 'max-nested-callbacks',
  },
  /** @see http://eslint.org/docs/rules/max-params */
  {
    id: 'max-params',
  },
  /** @see http://eslint.org/docs/rules/max-statements */
  {
    id: 'max-statements',
  },
  /** @see http://eslint.org/docs/rules/max-statements-per-line */
  {
    id: 'max-statements-per-line',
  },
  /** @see http://eslint.org/docs/rules/multiline-comment-style */
  {
    id: 'multiline-comment-style',
  },
  /** @see http://eslint.org/docs/rules/multiline-ternary */
  {
    id: 'multiline-ternary',
  },
  /** @see http://eslint.org/docs/rules/new-cap */
  {
    id: 'new-cap',
  },
  /** @see http://eslint.org/docs/rules/new-parens */
  {
    id: 'new-parens',
  },
  /** @see http://eslint.org/docs/rules/newline-per-chained-call */
  {
    id: 'newline-per-chained-call',
  },
  /** @see http://eslint.org/docs/rules/no-alert */
  {
    id: 'no-alert',
  },
  /** @see http://eslint.org/docs/rules/no-array-constructor */
  {
    id: 'no-array-constructor',
  },
  /** @see http://eslint.org/docs/rules/no-async-promise-executor */
  {
    id: 'no-async-promise-executor',
  },
  /** @see http://eslint.org/docs/rules/no-await-in-loop */
  {
    id: 'no-await-in-loop',
  },
  /** @see http://eslint.org/docs/rules/no-bitwise */
  {
    id: 'no-bitwise',
  },
  /** @see http://eslint.org/docs/rules/no-buffer-constructor */
  {
    id: 'no-buffer-constructor',
  },
  /** @see http://eslint.org/docs/rules/no-caller */
  {
    id: 'no-caller',
  },
  /** @see http://eslint.org/docs/rules/no-case-declarations */
  {
    id: 'no-case-declarations',
  },
  /** @see http://eslint.org/docs/rules/no-class-assign */
  {
    id: 'no-class-assign',
  },
  /** @see http://eslint.org/docs/rules/no-compare-neg-zero */
  {
    id: 'no-compare-neg-zero',
  },
  /** @see http://eslint.org/docs/rules/no-cond-assign */
  {
    id: 'no-cond-assign',
  },
  /** @see http://eslint.org/docs/rules/no-confusing-arrow */
  {
    id: 'no-confusing-arrow',
  },
  /** @see http://eslint.org/docs/rules/no-console */
  {
    id: 'no-console',
  },
  /** @see http://eslint.org/docs/rules/no-const-assign */
  {
    id: 'no-const-assign',
  },
  /** @see http://eslint.org/docs/rules/no-constant-condition */
  {
    id: 'no-constant-condition',
  },
  /** @see http://eslint.org/docs/rules/no-constructor-return */
  {
    id: 'no-constructor-return',
  },
  /** @see http://eslint.org/docs/rules/no-continue */
  {
    id: 'no-continue',
  },
  /** @see http://eslint.org/docs/rules/no-control-regex */
  {
    id: 'no-control-regex',
  },
  /** @see http://eslint.org/docs/rules/no-debugger */
  {
    id: 'no-debugger',
  },
  /** @see http://eslint.org/docs/rules/no-delete-var */
  {
    id: 'no-delete-var',
  },
  /** @see http://eslint.org/docs/rules/no-div-regex */
  {
    id: 'no-div-regex',
  },
  /** @see http://eslint.org/docs/rules/no-dupe-args */
  {
    id: 'no-dupe-args',
  },
  /** @see http://eslint.org/docs/rules/no-dupe-class-members */
  {
    id: 'no-dupe-class-members',
  },
  /** @see http://eslint.org/docs/rules/no-dupe-else-if */
  {
    id: 'no-dupe-else-if',
  },
  /** @see http://eslint.org/docs/rules/no-dupe-keys */
  {
    id: 'no-dupe-keys',
  },
  /** @see http://eslint.org/docs/rules/no-duplicate-case */
  {
    id: 'no-duplicate-case',
  },
  /** @see http://eslint.org/docs/rules/no-duplicate-imports */
  {
    id: 'no-duplicate-imports',
  },
  /** @see http://eslint.org/docs/rules/no-else-return */
  {
    id: 'no-else-return',
  },
  /** @see http://eslint.org/docs/rules/no-empty */
  {
    id: 'no-empty',
  },
  /** @see http://eslint.org/docs/rules/no-empty-character-class */
  {
    id: 'no-empty-character-class',
  },
  /** @see http://eslint.org/docs/rules/no-empty-function */
  {
    id: 'no-empty-function',
  },
  /** @see http://eslint.org/docs/rules/no-empty-pattern */
  {
    id: 'no-empty-pattern',
  },
  /** @see http://eslint.org/docs/rules/no-eq-null */
  {
    id: 'no-eq-null',
  },
  /** @see http://eslint.org/docs/rules/no-eval */
  {
    id: 'no-eval',
  },
  /** @see http://eslint.org/docs/rules/no-ex-assign */
  {
    id: 'no-ex-assign',
  },
  /** @see http://eslint.org/docs/rules/no-extend-native */
  {
    id: 'no-extend-native',
  },
  /** @see http://eslint.org/docs/rules/no-extra-bind */
  {
    id: 'no-extra-bind',
  },
  /** @see http://eslint.org/docs/rules/no-extra-boolean-cast */
  {
    id: 'no-extra-boolean-cast',
  },
  /** @see http://eslint.org/docs/rules/no-extra-label */
  {
    id: 'no-extra-label',
  },
  /** @see http://eslint.org/docs/rules/no-extra-parens */
  {
    id: 'no-extra-parens',
  },
  /** @see http://eslint.org/docs/rules/no-extra-semi */
  {
    id: 'no-extra-semi',
  },
  /** @see http://eslint.org/docs/rules/no-fallthrough */
  {
    id: 'no-fallthrough',
  },
  /** @see http://eslint.org/docs/rules/no-floating-decimal */
  {
    id: 'no-floating-decimal',
  },
  /** @see http://eslint.org/docs/rules/no-func-assign */
  {
    id: 'no-func-assign',
  },
  /** @see http://eslint.org/docs/rules/no-global-assign */
  {
    id: 'no-global-assign',
  },
  /** @see http://eslint.org/docs/rules/no-implicit-coercion */
  {
    id: 'no-implicit-coercion',
  },
  /** @see http://eslint.org/docs/rules/no-implicit-globals */
  {
    id: 'no-implicit-globals',
  },
  /** @see http://eslint.org/docs/rules/no-implied-eval */
  {
    id: 'no-implied-eval',
  },
  /** @see http://eslint.org/docs/rules/no-import-assign */
  {
    id: 'no-import-assign',
  },
  /** @see http://eslint.org/docs/rules/no-inline-comments */
  {
    id: 'no-inline-comments',
  },
  /** @see http://eslint.org/docs/rules/no-inner-declarations */
  {
    id: 'no-inner-declarations',
  },
  /** @see http://eslint.org/docs/rules/no-invalid-regexp */
  {
    id: 'no-invalid-regexp',
  },
  /** @see http://eslint.org/docs/rules/no-invalid-this */
  {
    id: 'no-invalid-this',
  },
  /** @see http://eslint.org/docs/rules/no-irregular-whitespace */
  {
    id: 'no-irregular-whitespace',
  },
  /** @see http://eslint.org/docs/rules/no-iterator */
  {
    id: 'no-iterator',
  },
  /** @see http://eslint.org/docs/rules/no-label-var */
  {
    id: 'no-label-var',
  },
  /** @see http://eslint.org/docs/rules/no-labels */
  {
    id: 'no-labels',
  },
  /** @see http://eslint.org/docs/rules/no-lone-blocks */
  {
    id: 'no-lone-blocks',
  },
  /** @see http://eslint.org/docs/rules/no-lonely-if */
  {
    id: 'no-lonely-if',
  },
  /** @see http://eslint.org/docs/rules/no-loop-func */
  {
    id: 'no-loop-func',
  },
  /** @see http://eslint.org/docs/rules/no-magic-numbers */
  {
    id: 'no-magic-numbers',
  },
  /** @see http://eslint.org/docs/rules/no-misleading-character-class */
  {
    id: 'no-misleading-character-class',
  },
  /** @see http://eslint.org/docs/rules/no-mixed-operators */
  {
    id: 'no-mixed-operators',
  },
  /** @see http://eslint.org/docs/rules/no-mixed-requires */
  {
    id: 'no-mixed-requires',
  },
  /** @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs */
  {
    id: 'no-mixed-spaces-and-tabs',
  },
  /** @see http://eslint.org/docs/rules/no-multi-assign */
  {
    id: 'no-multi-assign',
  },
  /** @see http://eslint.org/docs/rules/no-multi-spaces */
  {
    id: 'no-multi-spaces',
  },
  /** @see http://eslint.org/docs/rules/no-multi-str */
  {
    id: 'no-multi-str',
  },
  /** @see http://eslint.org/docs/rules/no-multiple-empty-lines */
  {
    id: 'no-multiple-empty-lines',
  },
  /** @see http://eslint.org/docs/rules/no-negated-condition */
  {
    id: 'no-negated-condition',
  },
  /** @see http://eslint.org/docs/rules/no-nested-ternary */
  {
    id: 'no-nested-ternary',
  },
  /** @see http://eslint.org/docs/rules/no-new */
  {
    id: 'no-new',
  },
  /** @see http://eslint.org/docs/rules/no-new-func */
  {
    id: 'no-new-func',
  },
  /** @see http://eslint.org/docs/rules/no-new-object */
  {
    id: 'no-new-object',
  },
  /** @see http://eslint.org/docs/rules/no-new-require */
  {
    id: 'no-new-require',
  },
  /** @see http://eslint.org/docs/rules/no-new-symbol */
  {
    id: 'no-new-symbol',
  },
  /** @see http://eslint.org/docs/rules/no-new-wrappers */
  {
    id: 'no-new-wrappers',
  },
  /** @see http://eslint.org/docs/rules/no-obj-calls */
  {
    id: 'no-obj-calls',
  },
  /** @see http://eslint.org/docs/rules/no-octal */
  {
    id: 'no-octal',
  },
  /** @see http://eslint.org/docs/rules/no-octal-escape */
  {
    id: 'no-octal-escape',
  },
  /** @see http://eslint.org/docs/rules/no-param-reassign */
  {
    id: 'no-param-reassign',
  },
  /** @see http://eslint.org/docs/rules/no-path-concat */
  {
    id: 'no-path-concat',
  },
  /** @see http://eslint.org/docs/rules/no-plusplus */
  {
    id: 'no-plusplus',
  },
  /** @see http://eslint.org/docs/rules/no-process-env */
  {
    id: 'no-process-env',
  },
  /** @see http://eslint.org/docs/rules/no-process-exit */
  {
    id: 'no-process-exit',
  },
  /** @see http://eslint.org/docs/rules/no-proto */
  {
    id: 'no-proto',
  },
  /** @see http://eslint.org/docs/rules/no-prototype-builtins */
  {
    id: 'no-prototype-builtins',
  },
  /** @see http://eslint.org/docs/rules/no-redeclare */
  {
    id: 'no-redeclare',
  },
  /** @see http://eslint.org/docs/rules/no-regex-spaces */
  {
    id: 'no-regex-spaces',
  },
  /** @see http://eslint.org/docs/rules/no-restricted-globals */
  {
    id: 'no-restricted-globals',
  },
  /** @see http://eslint.org/docs/rules/no-restricted-imports */
  {
    id: 'no-restricted-imports',
  },
  /** @see http://eslint.org/docs/rules/no-restricted-modules */
  {
    id: 'no-restricted-modules',
  },
  /** @see http://eslint.org/docs/rules/no-restricted-properties */
  {
    id: 'no-restricted-properties',
  },
  /** @see http://eslint.org/docs/rules/no-restricted-syntax */
  {
    id: 'no-restricted-syntax',
  },
  /** @see http://eslint.org/docs/rules/no-return-assign */
  {
    id: 'no-return-assign',
  },
  /** @see http://eslint.org/docs/rules/no-return-await */
  {
    id: 'no-return-await',
  },
  /** @see http://eslint.org/docs/rules/no-script-url */
  {
    id: 'no-script-url',
  },
  /** @see http://eslint.org/docs/rules/no-self-assign */
  {
    id: 'no-self-assign',
  },
  /** @see http://eslint.org/docs/rules/no-self-compare */
  {
    id: 'no-self-compare',
  },
  /** @see http://eslint.org/docs/rules/no-sequences */
  {
    id: 'no-sequences',
  },
  /** @see http://eslint.org/docs/rules/no-setter-return */
  {
    id: 'no-setter-return',
  },
  /** @see http://eslint.org/docs/rules/no-shadow */
  {
    id: 'no-shadow',
  },
  /** @see http://eslint.org/docs/rules/no-shadow-restricted-names */
  {
    id: 'no-shadow-restricted-names',
  },
  /** @see http://eslint.org/docs/rules/no-sparse-arrays */
  {
    id: 'no-sparse-arrays',
  },
  /** @see http://eslint.org/docs/rules/no-sync */
  {
    id: 'no-sync',
  },
  /** @see http://eslint.org/docs/rules/no-tabs */
  {
    id: 'no-tabs',
  },
  /** @see http://eslint.org/docs/rules/no-template-curly-in-string */
  {
    id: 'no-template-curly-in-string',
  },
  /** @see http://eslint.org/docs/rules/no-ternary */
  {
    id: 'no-ternary',
  },
  /** @see http://eslint.org/docs/rules/no-this-before-super */
  {
    id: 'no-this-before-super',
  },
  /** @see http://eslint.org/docs/rules/no-throw-literal */
  {
    id: 'no-throw-literal',
  },
  /** @see http://eslint.org/docs/rules/no-trailing-spaces */
  {
    id: 'no-trailing-spaces',
  },
  /** @see http://eslint.org/docs/rules/no-undef */
  {
    id: 'no-undef',
  },
  /** @see http://eslint.org/docs/rules/no-undef-init */
  {
    id: 'no-undef-init',
  },
  /** @see http://eslint.org/docs/rules/no-undefined */
  {
    id: 'no-undefined',
  },
  /** @see http://eslint.org/docs/rules/no-underscore-dangle */
  {
    id: 'no-underscore-dangle',
  },
  /** @see http://eslint.org/docs/rules/no-unexpected-multiline */
  {
    id: 'no-unexpected-multiline',
  },
  /** @see http://eslint.org/docs/rules/no-unmodified-loop-condition */
  {
    id: 'no-unmodified-loop-condition',
  },
  /** @see http://eslint.org/docs/rules/no-unneeded-ternary */
  {
    id: 'no-unneeded-ternary',
  },
  /** @see http://eslint.org/docs/rules/no-unreachable */
  {
    id: 'no-unreachable',
  },
  /** @see http://eslint.org/docs/rules/no-unsafe-finally */
  {
    id: 'no-unsafe-finally',
  },
  /** @see http://eslint.org/docs/rules/no-unsafe-negation */
  {
    id: 'no-unsafe-negation',
  },
  /** @see http://eslint.org/docs/rules/no-unused-expressions */
  {
    id: 'no-unused-expressions',
  },
  /** @see http://eslint.org/docs/rules/no-unused-labels */
  {
    id: 'no-unused-labels',
  },
  /** @see http://eslint.org/docs/rules/no-unused-vars */
  {
    id: 'no-unused-vars',
  },
  /** @see http://eslint.org/docs/rules/no-use-before-define */
  {
    id: 'no-use-before-define',
  },
  /** @see http://eslint.org/docs/rules/no-useless-call */
  {
    id: 'no-useless-call',
  },
  /** @see http://eslint.org/docs/rules/no-useless-catch */
  {
    id: 'no-useless-catch',
  },
  /** @see http://eslint.org/docs/rules/no-useless-computed-key */
  {
    id: 'no-useless-computed-key',
  },
  /** @see http://eslint.org/docs/rules/no-useless-concat */
  {
    id: 'no-useless-concat',
  },
  /** @see http://eslint.org/docs/rules/no-useless-constructor */
  {
    id: 'no-useless-constructor',
  },
  /** @see http://eslint.org/docs/rules/no-useless-escape */
  {
    id: 'no-useless-escape',
  },
  /** @see http://eslint.org/docs/rules/no-useless-rename */
  {
    id: 'no-useless-rename',
  },
  /** @see http://eslint.org/docs/rules/no-useless-return */
  {
    id: 'no-useless-return',
  },
  /** @see http://eslint.org/docs/rules/no-var */
  {
    id: 'no-var',
  },
  /** @see http://eslint.org/docs/rules/no-void */
  {
    id: 'no-void',
  },
  /** @see http://eslint.org/docs/rules/no-warning-comments */
  {
    id: 'no-warning-comments',
  },
  /** @see http://eslint.org/docs/rules/no-whitespace-before-property */
  {
    id: 'no-whitespace-before-property',
  },
  /** @see http://eslint.org/docs/rules/no-with */
  {
    id: 'no-with',
  },
  /** @see http://eslint.org/docs/rules/nonblock-statement-body-position */
  {
    id: 'nonblock-statement-body-position',
  },
  /** @see http://eslint.org/docs/rules/object-curly-newline */
  {
    id: 'object-curly-newline',
  },
  /** @see http://eslint.org/docs/rules/object-curly-spacing */
  {
    id: 'object-curly-spacing',
  },
  /** @see http://eslint.org/docs/rules/object-property-newline */
  {
    id: 'object-property-newline',
  },
  /** @see http://eslint.org/docs/rules/object-shorthand */
  {
    id: 'object-shorthand',
  },
  /** @see http://eslint.org/docs/rules/one-var */
  {
    id: 'one-var',
  },
  /** @see http://eslint.org/docs/rules/one-var-declaration-per-line */
  {
    id: 'one-var-declaration-per-line',
  },
  /** @see http://eslint.org/docs/rules/operator-assignment */
  {
    id: 'operator-assignment',
  },
  /** @see http://eslint.org/docs/rules/operator-linebreak */
  {
    id: 'operator-linebreak',
  },
  /** @see http://eslint.org/docs/rules/padded-blocks */
  {
    id: 'padded-blocks',
  },
  /** @see http://eslint.org/docs/rules/padding-line-between-statements */
  {
    id: 'padding-line-between-statements',
  },
  /** @see http://eslint.org/docs/rules/prefer-arrow-callback */
  {
    id: 'prefer-arrow-callback',
  },
  /** @see http://eslint.org/docs/rules/prefer-const */
  {
    id: 'prefer-const',
  },
  /** @see http://eslint.org/docs/rules/prefer-destructuring */
  {
    id: 'prefer-destructuring',
  },
  /** @see http://eslint.org/docs/rules/prefer-exponentiation-operator */
  {
    id: 'prefer-exponentiation-operator',
  },
  /** @see http://eslint.org/docs/rules/prefer-named-capture-group */
  {
    id: 'prefer-named-capture-group',
  },
  /** @see http://eslint.org/docs/rules/prefer-numeric-literals */
  {
    id: 'prefer-numeric-literals',
  },
  /** @see http://eslint.org/docs/rules/prefer-object-spread */
  {
    id: 'prefer-object-spread',
  },
  /** @see http://eslint.org/docs/rules/prefer-promise-reject-errors */
  {
    id: 'prefer-promise-reject-errors',
  },
  /** @see http://eslint.org/docs/rules/prefer-regex-literals */
  {
    id: 'prefer-regex-literals',
  },
  /** @see http://eslint.org/docs/rules/prefer-rest-params */
  {
    id: 'prefer-rest-params',
  },
  /** @see http://eslint.org/docs/rules/prefer-spread */
  {
    id: 'prefer-spread',
  },
  /** @see http://eslint.org/docs/rules/prefer-template */
  {
    id: 'prefer-template',
  },
  /** @see http://eslint.org/docs/rules/quote-props */
  {
    id: 'quote-props',
  },
  /** @see http://eslint.org/docs/rules/quotes */
  {
    id: 'quotes',
  },
  /** @see http://eslint.org/docs/rules/radix */
  {
    id: 'radix',
  },
  /** @see http://eslint.org/docs/rules/require-atomic-updates */
  {
    id: 'require-atomic-updates',
  },
  /** @see http://eslint.org/docs/rules/require-await */
  {
    id: 'require-await',
  },
  /** @see http://eslint.org/docs/rules/require-unicode-regexp */
  {
    id: 'require-unicode-regexp',
  },
  /** @see http://eslint.org/docs/rules/require-yield */
  {
    id: 'require-yield',
  },
  /** @see http://eslint.org/docs/rules/rest-spread-spacing */
  {
    id: 'rest-spread-spacing',
  },
  /** @see http://eslint.org/docs/rules/semi */
  {
    id: 'semi',
  },
  /** @see http://eslint.org/docs/rules/semi-spacing */
  {
    id: 'semi-spacing',
  },
  /** @see http://eslint.org/docs/rules/semi-style */
  {
    id: 'semi-style',
  },
  /** @see http://eslint.org/docs/rules/sort-imports */
  {
    id: 'sort-imports',
  },
  /** @see http://eslint.org/docs/rules/sort-keys */
  {
    id: 'sort-keys',
  },
  /** @see http://eslint.org/docs/rules/sort-vars */
  {
    id: 'sort-vars',
  },
  /** @see http://eslint.org/docs/rules/space-before-blocks */
  {
    id: 'space-before-blocks',
  },
  /** @see http://eslint.org/docs/rules/space-before-function-paren */
  {
    id: 'space-before-function-paren',
  },
  /** @see http://eslint.org/docs/rules/space-in-parens */
  {
    id: 'space-in-parens',
  },
  /** @see http://eslint.org/docs/rules/space-infix-ops */
  {
    id: 'space-infix-ops',
  },
  /** @see http://eslint.org/docs/rules/space-unary-ops */
  {
    id: 'space-unary-ops',
  },
  /** @see http://eslint.org/docs/rules/spaced-comment */
  {
    id: 'spaced-comment',
  },
  /** @see http://eslint.org/docs/rules/strict */
  {
    id: 'strict',
  },
  /** @see http://eslint.org/docs/rules/switch-colon-spacing */
  {
    id: 'switch-colon-spacing',
  },
  /** @see http://eslint.org/docs/rules/symbol-description */
  {
    id: 'symbol-description',
  },
  /** @see http://eslint.org/docs/rules/template-curly-spacing */
  {
    id: 'template-curly-spacing',
  },
  /** @see http://eslint.org/docs/rules/template-tag-spacing */
  {
    id: 'template-tag-spacing',
  },
  /** @see http://eslint.org/docs/rules/unicode-bom */
  {
    id: 'unicode-bom',
  },
  /** @see http://eslint.org/docs/rules/use-isnan */
  {
    id: 'use-isnan',
  },
  /** @see http://eslint.org/docs/rules/valid-typeof */
  {
    id: 'valid-typeof',
  },
  /** @see http://eslint.org/docs/rules/vars-on-top */
  {
    id: 'vars-on-top',
  },
  /** @see http://eslint.org/docs/rules/wrap-iife */
  {
    id: 'wrap-iife',
  },
  /** @see http://eslint.org/docs/rules/wrap-regex */
  {
    id: 'wrap-regex',
  },
  /** @see http://eslint.org/docs/rules/yield-star-spacing */
  {
    id: 'yield-star-spacing',
  },
  /** @see http://eslint.org/docs/rules/yoda */
  {
    id: 'yoda',
  },
];

export { rules, ESLintRule };
