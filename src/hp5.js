'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./cvstoh5p/vocabularies");
const LearnAndDiscover = require("./cvstoh5p/LearnAndDiscover");
const ReadAndWrite = require("./cvstoh5p/ReadAndWrite");
const Presentation = require("./cvstoh5p/Presentation");
const ProgressCheck = require("./cvstoh5p/ProgressCheck");
const ListeningPractice = require("./cvstoh5p/ListeningPractice");



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