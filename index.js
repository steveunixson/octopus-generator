#!/usr/bin/env node

const inquirer = require('inquirer');
const QUESTIONS = require('./config/questions');
const Main = require('./classes/main.class');

inquirer
  .prompt(QUESTIONS)
  .then((answers) => {
    const bootstrap = new Main(answers);
    bootstrap
      .createDirectories()
      .createFiles()
      .createFileByTemplate();
  });
