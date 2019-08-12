'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GListeningVideo3 extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GListeningVideo3/');
            this.nameFolder = 'GListeningVideo3/'
            this.H5Plibrary = 'GListeningVideo3/'
            this.subname = '/'
            this.cvs_name = 'GListeningVideo3.csv'
            this.subh5pname = 'GListeningVideo3'
            this.listH5Ps['GListeningVideo3'] = {
                name: 'GListeningVideo3',
                init: 1
            }
        }
    }