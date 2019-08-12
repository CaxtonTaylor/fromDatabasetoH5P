'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GListeningVideo2 extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GListeningVideo2/');
            this.nameFolder = 'GListeningVideo2/'
            this.H5Plibrary = 'GListeningVideo2/'
            this.subname = '/'
            this.cvs_name = 'GListeningVideo2.csv'
            this.subh5pname = 'GListeningVideo2'
            this.listH5Ps['GListeningVideo2'] = {
                name: 'GListeningVideo2',
                init: 1
            }
        }
    }