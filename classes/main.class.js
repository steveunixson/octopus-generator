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
      const rootDirs = Object.keys(template(this.structure).root);
      const srcDirs = Object.keys(template(this.structure).root.src);
      fs.mkdirSync(`${this.dir}/${this.name}`);
      rootDirs.forEach((item) => {
        fs.mkdirSync(`${this.dir}/${this.name}/${item}`);
      });
      srcDirs.forEach((item) => {
        fs.mkdirSync(`${this.dir}/${this.name}/src/${item}`);
      });
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
