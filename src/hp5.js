'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const Vocabularies = require("./cvstoh5p/scorm/vocabularies");
const LearnAndDiscover = require("./cvstoh5p/scorm/LearnAndDiscover");
const ReadAndWrite = require("./cvstoh5p/scorm/ReadAndWrite");
const Presentation = require("./cvstoh5p/scorm/Presentation");
const ProgressCheck = require("./cvstoh5p/scorm/ProgressCheck");
const ListeningPractice = require("./cvstoh5p/scorm/ListeningPractice")
const ListeningVideo1 = require("./cvstoh5p/scorm/ListeningVideo1");

const Speaking = require("./cvstoh5p/scorm/Speaking");

const GFlashcards = require("./cvstoh5p/google/GFlashcards");
const GLearnAndDiscover = require("./cvstoh5p/google/GLearnAndDiscover");
const GListeningPractice = require("./cvstoh5p/google/GListeningPractice");
const GListeningVideo1 = require("./cvstoh5p/google/GListeningVideo1");
const GListeningVideo2 = require("./cvstoh5p/google/GListeningVideo2");
const GListeningVideo3 = require("./cvstoh5p/google/GListeningVideo3");
const GPresentation = require("./cvstoh5p/google/GPresentation");
const GProgressCheck = require("./cvstoh5p/google/GProgressCheck");
const GSpeaking = require("./cvstoh5p/google/GSpeaking");
const GVocabulary = require("./cvstoh5p/google/GVocabulary");
const GReadandWrite = require("./cvstoh5p/google/GReadandWrite");

module.exports =
    class H5P {
        constructor() {

        }
        async init() {
            this.Lesson = await utils.readJSON(this.jsonPATH);
        }
        async processJSON(jsonPATH) {
            try {
                this.jsonPATH = jsonPATH;
                await this.init();
                if (this.Lesson.from === 'scorm') {
                    const learnanddiscover = new LearnAndDiscover(this.Lesson);
                    const listening_practice = new ListeningPractice(this.Lesson);
                    const listening_video1 = new ListeningVideo1(this.Lesson);
                    
                    const presentation = new Presentation(this.Lesson);
                    const progress_check = new ProgressCheck(this.Lesson);
                    const readandwrite = new ReadAndWrite(this.Lesson);
                    const speaking = new Speaking(this.Lesson);

                    await Promise.all([
                        learnanddiscover.makeH5Ps(),
                        readandwrite.makeH5Ps(),
                        presentation.makeH5Ps(),
                        listening_practice.makeH5Ps(),
                        listening_video1.makeH5Ps(),
                        progress_check.makeH5Ps(),
                        speaking.makeH5Ps()
                    ])

                }
                if (this.Lesson.from === 'gsheet') {

                    const gflashcards = new GFlashcards(this.Lesson);
                    const glearnanddiscover = new GLearnAndDiscover(this.Lesson);                    
                    const glisteningpractice = new GListeningPractice(this.Lesson);
                    const glisteningvideo1 = new GListeningVideo1(this.Lesson);
                    const glisteningvideo2 = new GListeningVideo2(this.Lesson);
                    const glisteningvideo3 = new GListeningVideo3(this.Lesson);
                    const gpresentation = new GPresentation(this.Lesson);
                    const gprogress_check = new GProgressCheck(this.Lesson);
                    const gspeaking = new GSpeaking(this.Lesson);
                    const gvocabulary = new GVocabulary(this.Lesson);
                    const greadandwrite = new GReadandWrite(this.Lesson);



                    await Promise.all([
                        gflashcards.makeH5Ps(),
                        glearnanddiscover.makeH5Ps(),
                        glisteningpractice.makeH5Ps(),
                        glisteningvideo1.makeH5Ps(),
                        glisteningvideo2.makeH5Ps(),
                        glisteningvideo3.makeH5Ps(),
                        gpresentation.makeH5Ps(),
                        gprogress_check.makeH5Ps(),
                        greadandwrite.makeH5Ps(),
                        gvocabulary.makeH5Ps(),
                        gspeaking.makeH5Ps()
                    ])
                }
            } catch (error) {
                console.log(`Lesson :(${process.cwd() + this.jsonPATH})`)
                throw error
            }

        }
    }