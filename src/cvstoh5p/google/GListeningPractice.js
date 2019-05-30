'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GListeningPractice extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GListeningPractice/');
            this.nameFolder = 'GListeningPractice/'
            this.H5Plibrary = 'GListeningPractice/'
            this.subname = '/'
            this.cvs_name = 'GListeningPractice.csv'
            this.subh5pname = 'GListeningPractice'
            this.listH5Ps['GListeningPractice'] = {
                name: 'GListeningPractice',
                init: 1
            }
        }
    }