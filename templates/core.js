const core = {
  name: 'core',
  root: {
    src: {
      helpers: {
        files: ['helper.ts'],
      },
      classes: {
        files: ['main.ts'],
      },
    },
    tests: {
      files: ['test.js'],
    },
    examples: {
      files: ['example.js'],
    },
    config: {
      files: ['default.js', 'pages.js'],
    },
    images: {},
    files: ['.gitignore', 'package.json'],
  },
};

module.exports = (type) => {
  if (type === 'core') {
    return core;
  }
  if (type === 'server') {
    return 'Not implimented yet!';
  }
  if (type === 'client') {
    return 'Not implimented yet!';
  }
  return 0;
};
