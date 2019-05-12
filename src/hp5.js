'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./vocabularies");
module.exports =
  class H5P {
    constructor() {

    }
    async init(){
        this.Lesson = await utils.readJSON(this.jsonPATH);
    }
    async processJSON(jsonPATH){
        this.jsonPATH=jsonPATH;
        await this.init();
        const vocabularies = new Vocabularies(this.Lesson);
        await vocabularies.makeH5Ps();

    }
}