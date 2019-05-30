'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./cvstoh5p/scorm/vocabularies");
const LearnAndDiscover = require("./cvstoh5p/scorm/LearnAndDiscover");
const ReadAndWrite = require("./cvstoh5p/scorm/ReadAndWrite");
const Presentation = require("./cvstoh5p/scorm/Presentation");
const ProgressCheck = require("./cvstoh5p/scorm/ProgressCheck");
const ListeningPractice = require("./cvstoh5p/scorm/ListeningPractice");

const GLearnAndDiscover = require("./cvstoh5p/google/GLearnAndDiscover");
const GListeningPractice = require("./cvstoh5p/google/GListeningPractice");
const GPresentation = require("./cvstoh5p/google/GPresentation");
const GProgressCheck = require("./cvstoh5p/google/GProgressCheck");
const GSpeaking = require("./cvstoh5p/google/GSpeaking");
const GVocabulary = require("./cvstoh5p/google/GVocabulary");

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

                const glearnanddiscover = new GLearnAndDiscover(this.Lesson);
                const glisteningpractice = new GListeningPractice(this.Lesson);
                const gpresentation = new GPresentation(this.Lesson);
                const gprogress_check = new GProgressCheck(this.Lesson);
                const gspeaking = new GSpeaking(this.Lesson);
                const gvocabulary = new GVocabulary(this.Lesson);

                await Promise.all([
                    glearnanddiscover.makeH5Ps(),
                    // glisteningpractice.makeH5Ps(),
                    // gpresentation.makeH5Ps(),
                    // gprogress_check.makeH5Ps(),
                    // gspeaking.makeH5Ps(),
                    // gvocabulary.makeH5Ps(),
                ])
            }
        }
    }