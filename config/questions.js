module.exports = [
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    validate: (input) => {
      if (/^([A-Za-z-_d])+$/.test(input)) {
        return true;
      }
      return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
  {
    type: 'input',
    name: 'dir',
    message: 'Use this directory?',
    default: () => process.cwd(),
    // TODO make path validation
    // Path should not be empty
    // Path should not be home
    // Path should not be root
  },
  {
    type: 'list',
    name: 'structure',
    message: 'What structure do you need?',
    choices: ['Server', 'Client', 'Core'],
    filter: val => val.toLowerCase(),
  },
  {
    name: 'author',
    type: 'input',
    message: 'Author`s name:',
  },
  {
    name: 'git',
    type: 'input',
    message: 'Enter your github:',
    // TODO make url validation
  },
];
