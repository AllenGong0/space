const { mkdReactConfig } = require('@monkey-design/eslint-config-mkd-react');

const config = mkdReactConfig({ project: './tsconfig.json' });

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        // 如果需要增加或修改配置，可以在这里修改
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/ban-types': 1,
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/explicit-member-accessibility': 1,
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'no-param-reassign': 'off',
        'no-continue': 'off',
        'no-shadow': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        radix: 'off',
        'react/no-array-index-key': 'off',
        'no-cond-assign': ['error', 'except-parens'],
        'no-restricted-syntax': 'off',
        'react-hooks/exhaustive-deps': 0,
        'react/prefer-stateless-function': 'off',
      },
    },
  ],
};
