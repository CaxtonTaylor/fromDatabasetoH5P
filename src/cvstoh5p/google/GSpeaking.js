'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GSpeaking extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GSpeaking/');
            this.nameFolder = 'GSpeaking/'
            this.H5Plibrary = 'GSpeaking/'
            this.subname = '/'
            this.cvs_name = 'GSpeaking.csv'
            this.subh5pname = 'GSpeaking'
            this.listH5Ps['GSpeaking'] = {
                name: 'GSpeaking',
                init: 1
            }
        }
    }