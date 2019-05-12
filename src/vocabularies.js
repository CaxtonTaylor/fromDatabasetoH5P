'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
module.exports =
    class Vocabularies {
        constructor(Lesson) {
            this.Lesson = Lesson;
            this.list = [];
            this.list['Listening'] = {
                name:'Listening',
                init:3

            }
            this.list['Writing'] = {
                name:'Writing',
                init:7
            }
            this.list['Reading'] = {
                name:'Reading',
                init:11
            }
            this.list['Monologue'] = {
                name:'Monologue',
                init:15
            }
            this.list['Conversation'] = {
                name:'Conversation',
                init:19
            }
        }
        async makeH5Ps() {
            await this.init();
            await this.executeCVS();

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
                vocabulary.h5p =  await utils.readJSON(vocabulary.path+'h5p.json');
                vocabulary.content =  await utils.readJSON(vocabulary.path+'content/content.json');
                return vocabulary;
            }.bind(this))

        }
        async loadCVS() {
            let cvs = await utils.readCVS('./CSV/VocabularyTest.csv');
            cvs.shift()
            cvs.shift();//remove two rows titles
            this.cvs = cvs;
        }
        vocabularyNamefromrowindex(index){
            let vocabularyName;
            await this.updateforeachVocabularies(async function (vocabulary, vocabulary_name) {
                vocabularyName=vocabulary.init;
                return vocabulary;
            }.bind(this))
        }
        async processRow(row){
            for (let i = 0; i < row.length; i++) {
                let column = row[i];
                if (column) {
                    
                }
                console.log(column);
            }
        }
        async executeCVS() {
            for (let i = 0; i < this.cvs.length; i++) {
                let row = this.cvs[i];
                console.log(row);
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