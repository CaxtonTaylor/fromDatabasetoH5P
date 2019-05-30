'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GPresentation extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GPresentation/');
            this.nameFolder = 'GPresentation/'
            this.H5Plibrary = 'GPresentation/'
            this.subname = '/'
            this.cvs_name = 'GPresentation.csv'
            this.subh5pname = 'GPresentation'
            this.listH5Ps['GPresentation'] = {
                name: 'GPresentation',
                init: 1
            }
        }
    }