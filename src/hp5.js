'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./vocabularies");
const LearnAndDiscover = require("./LearnAndDiscover");
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
        //const vocabularies = new Vocabularies(this.Lesson);
        //await vocabularies.makeH5Ps();
        const learnanddiscover = new LearnAndDiscover(this.Lesson);
        await learnanddiscover.makeH5Ps();

    }
}