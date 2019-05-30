'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GProgressCheck extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GProgressCheck/');
            this.nameFolder = 'GProgressCheck/'
            this.H5Plibrary = 'GProgressCheck/'
            this.subname = '/'
            this.cvs_name = 'GProgressCheck.csv'
            this.subh5pname = 'GProgressCheck'
            this.listH5Ps['GProgressCheck'] = {
                name: 'GProgressCheck',
                init: 1
            }
        }
    }