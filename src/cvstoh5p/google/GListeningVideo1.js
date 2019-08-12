'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GListeningVideo1 extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GListeningVideo1/');
            this.nameFolder = 'GListeningVideo1/'
            this.H5Plibrary = 'GListeningVideo1/'
            this.subname = '/'
            this.cvs_name = 'GListeningVideo1.csv'
            this.subh5pname = 'GListeningVideo1'
            this.listH5Ps['GListeningVideo1'] = {
                name: 'GListeningVideo1',
                init: 1
            }
        }
    }