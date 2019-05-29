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
        async init() {
            this.Lesson = await utils.readJSON(this.jsonPATH);
        }
        async processJSON(jsonPATH) {
            this.jsonPATH = jsonPATH;
            await this.init();
            if (this.Lesson.from === 'scorm') {
                const learnanddiscover = new LearnAndDiscover(this.Lesson);
                const readandwrite = new ReadAndWrite(this.Lesson);
                const presentation = new Presentation(this.Lesson);
                const listening_practice = new ListeningPractice(this.Lesson);
                const progress_check = new ProgressCheck(this.Lesson);
                await Promise.all([
                    learnanddiscover.makeH5Ps(),
                    readandwrite.makeH5Ps(),
                    presentation.makeH5Ps(),
                    listening_practice.makeH5Ps(),
                    progress_check.makeH5Ps(),
                ])
                
            }
            if (this.Lesson.from === 'gsheet') {
                const vocabularies = new Vocabularies(this.Lesson);
                await vocabularies.makeH5Ps();
            }
        }
    }