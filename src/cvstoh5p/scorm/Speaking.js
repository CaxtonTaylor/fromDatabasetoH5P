'use strict'
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class Speaking extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'Speaking/');
            this.nameFolder = 'Speaking/'
            this.H5Plibrary = 'Speaking/'
            this.subname = '/'
            this.cvs_name = 'Speaking.csv'
            this.subh5pname = 'Speaking'
            this.listH5Ps['Speaking'] = {
                name: 'Speaking',
                init: 1
            }
        }
    }