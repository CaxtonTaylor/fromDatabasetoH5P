const fs = require('fs');
module.exports =
  class utils {
    constructor() {


    }
    async exec(command){
      const { exec } = require('promisify-child-process');
      let child = exec(command)

      child.stdout.on('error', (data) => { 
          console.log('error ' + data) });

      child.stderr.on('data', (data) => {
          process.stderr.write(`\t ${data}`);
      });
      child.stdout.on('data', (data) => {
          process.stdout.write(`\t ${data}`);
      });
      return await child;
    }
    async unzip(path, dest){
      await this.exec(`cd ${dest} && ls && unzip ../${path}`);
    }
    async readCVS(filePath){

      const getStream = require('get-stream');
      const parse = require('csv-parse');
      const parseStream = parse({delimiter: ','});
      return await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
    }
    async readJSON(filePath){
      let rawdata = fs.readFileSync(filePath); 
      return JSON.parse(rawdata); 
    }
  }