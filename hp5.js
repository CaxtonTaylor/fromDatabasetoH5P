'use strict'
const Utils = require("./lib/utils");
const utils = new Utils();
module.exports =
  class H5P {
    constructor() {

    }
    async init(){

        let cvs = await utils.readCVS('./CSV/VocabularyTest.csv');
        this.cvs= cvs;
        console.log(cvs)
        for (var i = 0; i < this.cvs.length; i++) {
            var row = this.cvs[i];
            console.log(cvs);
        }
    }
}