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
            await this.makeFolders();
            await this.loadJSONs();
            await this.loadCVS();
            await this.executeCVS();
            await this.updateJSONs();
            await this.zipH5Ps();
        }

        async makeFolders() {
            let relativePath = 'English/General/' + this.Lesson.Level + '/' + this.Lesson.Level + '/Lesson' + this.Lesson.name + '/'
            this.ProcessPath = './H5Pprocess/' + relativePath
            this.UPPath = './UP/' + relativePath
            let VocabularyTestPath = './H5Ps/VocabularyTest/'

            await utils.emptyDir(this.ProcessPath)
            await utils.emptyDir(this.UPPath)
            await utils.createDir(this.UPPath)
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
                                //console.log(_.get(this.list[vocabularyName].content,key))
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
        async updateJSONs() {
            await this.updateforeachVocabularies(async function (vocabulary) {
                await utils.writeJSON(vocabulary.path + 'h5p.json', vocabulary.h5p);
                await utils.writeJSON(vocabulary.path + 'content/content.json', vocabulary.content);
                return vocabulary;
            }.bind(this))
        }
        async zipH5Ps() {
            await this.updateforeachVocabularies(async function (vocabulary) {
                let h5p_name = this.Lesson.Level + 'Lesson' + this.Lesson.name + vocabulary.name + 'Vocabulary.h5p';
                await utils.exec('cd ' + vocabulary.path + ' && zip -r ' + h5p_name + ' .');
                await utils.exec('mv ' + vocabulary.path + h5p_name + ' ' + this.UPPath + h5p_name, true);

                return vocabulary;
            }.bind(this))
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