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
                            if (relDesPath.includes("amazonaws")||key.split('.').pop() === "alt" ) {
                                relDesPath = value.split('/').pop()
                            }
                            let desPath = this.ProcessPath + h5pName + '/content/' + relDesPath
                            let oriPath = './DATABASE/' + value

                            if (fs.existsSync(oriPath)) {
                                await utils.exec('cp ./DATABASE/' + value + ' ' + desPath, true);
                            } else {
                                console.log('')
                            }
                            _.set(listH5Ps[h5pName].content, key, relDesPath)

                        }
                    } else {
                        let format = row[i + 3]
                        if (format) {
                            let params=''
                            if (format.split(' ')[1]) {
                                params=','+format.split(' ')[1]
                            }
                            value = eval("this." + format.split(' ')[0] + "(this." + row[0] + params+" )")
                        }
                        _.set(listH5Ps[h5pName].content, key, value)
                        //console.log(_.get(listH5Ps[h5pName].content,key))
                    }
                    break;
                default:
                    break;
            }
            return listH5Ps;
        }
        questionToEm(Resources,index) {
            return `<p><em>${Resources.body}</em></p>

            <p><strong>${Resources.questions[index].question}</strong></p>`
        }
        questionToP(text) {
            return `<p style="text-align: center;"><span style="font-size:1.375em;">${text}</span></p>`
        }
        questionTofill(Questions) {
            let html
            if (Questions[0].options[1].text) {
                html = `<p>
                <strong>
                    ${Questions[0].question}:
                </strong>
            </p>nn
            <p>
                *${Questions[0].options[0].text}/${Questions[0].options[1].text}*
            </p>nn
            <p>
                <strong>
                    ${Questions[1].question}:
                </strong>
            </p>nn
            <p>
                *${Questions[1].options[0].text}/${Questions[1].options[1].text}*
            </p>n`

            } else {
                html = `<p>
                <strong>${Questions[0].question}:</strong>
            </p>nn
            <p>
                *${Questions[0].options[0].text}*
            </p>nn
            <p>
                <strong>${Questions[1].question}:</strong>
            </p>nn
            <p>
                *${Questions[1].options[0].text}*
            </p>n`
            }
            return html

        }

    }