/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const helper = require('../helpers/helper');
const template = require('../templates/core');

class Package {
  _json() {
    return JSON.stringify({
      name: this.name,
      version: '0.0.1',
      scripts: {
        start: 'node index.js',
      },
      author: this.author,
      license: 'MIT',
      repository: {
        type: 'git',
        url: this.git,
      },
      dependencies: {},
      devDependencies: {
        eslint: '^5.12.1',
        'eslint-config-airbnb': '^17.1.0',
        'eslint-plugin-import': '^2.16.0',
        'eslint-plugin-jsx-a11y': '^6.2.0',
        'eslint-plugin-react': '^7.12.4',
      },
      eslintConfig: {
        extends: 'airbnb-base',
        globals: {
          document: true,
        },
      },
    }, null, 2);
  }

  _writeFile(file, content) {
    const stream = fs.createWriteStream(`${this.dir}/${this.name}/${file}`);
    stream
      .once('open', () => {
        stream.write(content, 'utf8');
        stream.end();
      })
      .on('finish', () => {
        console.log(`Created ${file}`);
      });
  }

  json() {
    this._writeFile(template(this.structure).root.files[1], this._json());
    return this;
  }

  ignore() {
    this._writeFile(template(this.structure).root.files[0], helper.gitIgnore());
    return this;
  }
}

module.exports = Package;
