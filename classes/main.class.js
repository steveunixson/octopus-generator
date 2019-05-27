const fs = require('fs');
const Package = require('./package.json');
const template = require('../templates/core');

class Main extends Package {
  constructor(answers) {
    super();
    this.dir = answers.dir;
    this.name = answers.name;
    this.structure = answers.structure;
    this.author = answers.author;
    this.git = answers.git;
  }

  createDirectories() {
    if (!fs.existsSync(`${this.dir}/${this.name}`)) {
      fs.mkdirSync(`${this.dir}/${this.name}`);
    }
    return this;
  }

  createFiles() {
    this.json();
    this.ignore();
    return this;
  }

  createFileByTemplate() {
    console.log('test');
    return this;
  }
}

module.exports = Main;