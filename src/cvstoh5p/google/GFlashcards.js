'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GFlashcards extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GFlashcards/');
            this.nameFolder = 'GFlashcards/'
            this.H5Plibrary = 'GFlashcards/'
            this.subname = '/'
            this.cvs_name = 'GFlashcards.csv'
            this.subh5pname = 'GFlashcards'
            this.listH5Ps['GFlashcards'] = {
                name: 'GFlashcards',
                init: 1
            }
        }
    }