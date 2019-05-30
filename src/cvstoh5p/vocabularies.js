'use strict'
const CVStoH5P = require("../cvstoh5p");
module.exports =
    class Vocabularies extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'Vocabularies/');
            this.nameFolder = 'Vocabularies/'
            this.H5Plibrary = 'VocabularyTest/'
            this.subname = '_VocabularyTest/'
            this.cvs_name = 'VocabularyTest.csv'
            this.subh5pname = 'Vocabulary'
            this.listH5Ps['Listening'] = {
                name: 'Listening',
                init: 3

            }
            this.listH5Ps['Writing'] = {
                name: 'Writing',
                init: 7
            }
            this.listH5Ps['Reading'] = {
                name: 'Reading',
                init: 11
            }
            this.listH5Ps['Monologue'] = {
                name: 'Monologue',
                init: 15
            }
            this.listH5Ps['Conversation'] = {
                name: 'Conversation',
                init: 19
            }
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
                            this.listH5Ps[vocabularyName].h5p[key] = eval(value)
                            break;
                        case 1://content update
                            value = eval('this.' + row[0])
                            if (row[6]) {
                                if (value) {
                                }
                            } else {
                                _.set(this.listH5Ps[vocabularyName].content, key, value)
                                //console.log(_.get(this.listH5Ps[vocabularyName].content,key))
                            }
                            return 'content'//check if exist 3 if exist move accest and update name
                            break;


                        default:
                            break;
                    }
                }
            }
        }
        async vocabularyNamefromrowindex(index) {
            let name;
            await this.updateforeachH5P(async function (vocabulary, vocabulary_name) {

                if (index >= vocabulary.init) {
                    name = vocabulary.name;
                }
                return vocabulary;
            }.bind(this))
            return name
        }

    }