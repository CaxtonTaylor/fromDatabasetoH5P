'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GVocabulary extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GVocabulary/');
            this.nameFolder = 'GVocabulary/'
            this.H5Plibrary = 'GVocabulary/'
            this.subname = '/'
            this.cvs_name = 'GVocabulary.csv'
            this.subh5pname = 'GVocabulary'
            this.listH5Ps['GVocabulary'] = {
                name: 'GVocabulary',
                init: 1
            }
        }
    }