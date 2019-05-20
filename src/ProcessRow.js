'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const _ = require('lodash');
const fs = require("fs");
module.exports =
    class ProcessRow {

        constructor(Lesson, ProcessPath) {
            this.Lesson = Lesson;
            this.ProcessPath = ProcessPath
        }
        async process(listH5Ps, h5pName, row, i) {
            let mod = (i - 3) % 4;
            let key, value
            key = row[i];
            switch (mod) {
                case 0://h5p update
                    value = row[i + 2];
                    listH5Ps[h5pName].h5p[key] = eval(value)
                    break;
                case 1://content update
                    value = eval('this.' + row[0])
                    let relDesPath = row[6]
                    if (relDesPath || key.split('.').pop() === "path") {
                        if (value) {
                            relDesPath = _.get(listH5Ps[h5pName].content, key)
                            let desPath = this.ProcessPath + h5pName + '/content/' + relDesPath
                            let oriPath = './DATABASE/' + value
                            // if (relDesPath.includes("amazonaws")) {

                            // }
                            if (fs.existsSync(oriPath)) {
                                await utils.exec('cp ./DATABASE/' + value + ' ' + desPath, true);
                            } else {
                                console.log('')
                            }


                        }
                    } else {
                        _.set(listH5Ps[h5pName].content, key, value)
                        //console.log(_.get(listH5Ps[h5pName].content,key))
                    }
                    break;


                default:
                    break;
            }
            return listH5Ps;
        }

    }