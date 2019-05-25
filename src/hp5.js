'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./vocabularies");
const LearnAndDiscover = require("./LearnAndDiscover");
const ReadAndWrite = require("./ReadAndWrite");
const Presentation = require("./Presentation");
const ProgressCheck = require("./ProgressCheck");
const ListeningPractice = require("./ListeningPractice");

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
        // const vocabularies = new Vocabularies(this.Lesson);
        // await vocabularies.makeH5Ps();
        // const learnanddiscover = new LearnAndDiscover(this.Lesson);
        // await learnanddiscover.makeH5Ps();
        // const readandwrite = new ReadAndWrite(this.Lesson);
        // await readandwrite.makeH5Ps();
        // const presentation = new Presentation(this.Lesson);
        // await presentation.makeH5Ps();
        const listening_practice = new ListeningPractice(this.Lesson);
        await listening_practice.makeH5Ps();
        
        

    }
}