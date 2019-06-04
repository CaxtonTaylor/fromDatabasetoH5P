const fs = require('fs');
const fse = require('fs-extra')
module.exports =
  class utils {
    constructor() {


    }
    async exec(command, showlogs) {
      const { exec } = require('promisify-child-process');
      let child = exec(command)
      child.stdout.on('error', (data) => {
        console.log('error ' + data)
      });
      if (showlogs) {
        child.stderr.on('data', (data) => {
          process.stderr.write(`\t ${data}`);
        });
        child.stdout.on('data', (data) => {
          process.stdout.write(`\t ${data}`);
        });
      }

      return await child;
    }
    async unzip(path, dest) {
      await this.exec(`cd ${dest} && ls && unzip ../${path}`);
    }
    async readCVS(filePath) {
      const getStream = require('get-stream');
      const parse = require('csv-parse');
      const parseStream = parse({ delimiter: ',' });
      return await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
    }
    async readJSON(filePath) {
      let rawdata = fs.readFileSync(filePath);
      return JSON.parse(rawdata);
    }
    async writeJSON(JSONpath,json) {
      const { promisify } = require('util')
      const writeFile = promisify(fs.writeFile)
      await writeFile(JSONpath, JSON.stringify(json, null, 4))
    }
    
    async createDir(dir) {
      const { mkdir } = require('commandir')
      await mkdir(dir)
    }
    async emptyDir(dir) {
      await fse.emptyDir(dir)
    }
    async copyDir(dirOrig, dirDest) {
      try {
        await this.exec(`mkdir -p ${dirDest}`);
        await this.exec(`cp -r ${dirOrig}/* ${dirDest}`);
      } catch (err) {
        console.error(err)
      }
    }
  }