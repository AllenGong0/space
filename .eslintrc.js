
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'react/no-array-index-key': 'off',
        'react-hooks/exhaustive-deps': 0,
      },
    },
  ],
};
