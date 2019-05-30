'use strict'
const Utils = require("../../lib/utils");
const CVStoH5P = require("../cvstoh5p");
module.exports =
    class ProgressCheck extends CVStoH5P {
        constructor(Lesson) {
            super(Lesson, 'ProgressCheck/');
            this.H5Plibrary = 'ProgressCheck/'
            this.subname = '/'
            this.cvs_name = 'ProgressCheck.csv'
            this.subh5pname = 'ProgressCheck'
            this.listH5Ps['ProgressCheck'] = {
                name: 'ProgressCheck',
                init: 1
            }
        }

    }