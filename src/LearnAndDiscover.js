'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const CVStoH5P = require("./cvstoh5p");
const fse = require("fs-extra");
module.exports =
    class LearnAndDiscover extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson);
            this.nameFolder = 'LearnAndDiscover/'
            this.H5Plibrary = 'LearnAndDiscover/'
            this.subname = '/'
            this.cvs_name = 'LearnAndDiscover.csv'
            this.subh5pname = 'LearnAndDiscover'
            this.listH5Ps['LearnAndDiscover'] = {
                name: 'LearnAndDiscover',
                init: 1
            }
        }
        async processRow(row) {
            const _ = require('lodash');
            for (let i = 1; i < row.length; i++) {
                let column = row[i];
                if (column) {
                    let mod = (i - 3) % 4
                    let h5pName = await this.h5pNamefromrowindex(i)
                    let key, value
                    key = row[i];
                    switch (mod) {
                        case 0://h5p update
                            value = row[i + 2];
                            this.listH5Ps[h5pName].h5p[key] = eval(value)
                            break;
                        case 1://content update
                            value = eval('this.' + row[0])
                            let relDesPath = row[6]
                            if (relDesPath) {
                                if (value) {
                                    let desPath = this.ProcessPath + h5pName + '/content/' + relDesPath
                                    await utils.exec('cp ./DATABASE/' + value + ' ' + desPath, true);
                                }
                            } else {
                                _.set(this.listH5Ps[h5pName].content, key, value)
                                //console.log(_.get(this.listH5Ps[h5pName].content,key))
                            }
                            return 'content'//check if exist 3 if exist move accest and update name
                            break;


                        default:
                            break;
                    }
                }
            }
        }
        async h5pNamefromrowindex(index) {
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