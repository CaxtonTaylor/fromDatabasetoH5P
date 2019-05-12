'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
module.exports =
    class Vocabularies {
        constructor(Lesson) {
            this.Lesson = Lesson;
            this.list = [];
            this.list['Listening'] = {
                name: 'Listening',
                init: 3

            }
            this.list['Writing'] = {
                name: 'Writing',
                init: 7
            }
            this.list['Reading'] = {
                name: 'Reading',
                init: 11
            }
            this.list['Monologue'] = {
                name: 'Monologue',
                init: 15
            }
            this.list['Conversation'] = {
                name: 'Conversation',
                init: 19
            }
        }
        async makeH5Ps() {
            await this.init();
            await this.executeCVS();
            await this.updateJSONs();

        }
        async init() {
            this.ProcessPath = './H5Pprocess/English/General/' + this.Lesson.Level + '/' + this.Lesson.Level + '/Lesson' + this.Lesson.name + '/'
            await this.makeFolders();
            await this.loadJSONs();
            await this.loadCVS();
        }
        async makeFolders() {
            let VocabularyTestPath = './H5Ps/VocabularyTest/'
            await utils.emptyDir(this.ProcessPath)

            await this.updateforeachVocabularies(async function (vocabulary, vocabulary_name) {
                vocabulary.name = vocabulary_name
                vocabulary.path = this.ProcessPath + vocabulary_name + '_VocabularyTest/'
                await utils.copyDir(VocabularyTestPath, vocabulary.path);

                return vocabulary;
            }.bind(this))
        }
        async loadJSONs() {
            await this.updateforeachVocabularies(async function (vocabulary, vocabulary_name) {
                vocabulary.h5p = await utils.readJSON(vocabulary.path + 'h5p.json');
                vocabulary.content = await utils.readJSON(vocabulary.path + 'content/content.json');
                return vocabulary;
            }.bind(this))

        }
        async loadCVS() {
            let cvs = await utils.readCVS('./CSV/VocabularyTest.csv');
            cvs.shift()
            cvs.shift();//remove two rows titles
            this.cvs = cvs;
        }
        async vocabularyNamefromrowindex(index) {
            let name;
            await this.updateforeachVocabularies(async function (vocabulary, vocabulary_name) {

                if (index >= vocabulary.init) {
                    name = vocabulary.name;
                }
                return vocabulary;
            }.bind(this))
            return name
        }
        columnType(index) {
            let mod = (index - 3) % 4


        }

        async processRow(row) {
            const _ = require('lodash');
            for (let i = 1; i < row.length; i++) {
                let column = row[i];
                if (column) {
                    let mod = (i - 3) % 4
                    let vocabularyName = await this.vocabularyNamefromrowindex(i)
                    let key, value
                    key = row[i];
                    switch (mod) {
                        case 0://h5p update
                            value = row[i + 2];
                            this.list[vocabularyName].h5p[key] = eval(value)
                            break;
                        case 1://content update
                            value = eval('this.' + row[0])
                            if (row[6]) {
                                if (value) {
                                }
                            } else {
                                _.set(this.list[vocabularyName].content, key, value)
                                console.log(_.get(this.list[vocabularyName].content,key))
                            }
                            return 'content'//check if exist 3 if exist move accest and update name
                            break;


                        default:
                            break;
                    }
                }
            }
        }
        async executeCVS() {
            for (let i = 0; i < this.cvs.length; i++) {
                let row = this.cvs[i];
                await this.processRow(row);
            }
        }
        async updateforeachVocabularies(funct) {
            for (const vocabulary_name in this.list) {
                if (this.list.hasOwnProperty(vocabulary_name)) {
                    let vocabulary = this.list[vocabulary_name];
                    vocabulary = await funct(vocabulary, vocabulary_name, this.list)
                    this.list[vocabulary_name] = vocabulary
                }
            }
        }

    }