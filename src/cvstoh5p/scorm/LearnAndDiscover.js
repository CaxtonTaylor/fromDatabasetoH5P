'use strict'
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class LearnAndDiscover extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'LearnAndDiscover/');
            this.nameFolder = 'LearnAndDiscover/'
            this.H5Plibrary = 'LearnAndDiscover/'
            this.subname = '/'
            this.cvs_name = 'LearnAndDiscover.csv'
            this.subh5pname = 'LearnAndDiscover'
            this.listH5Ps['LearnAndDiscover'] = {
                name: 'LearnAndDiscover',
                init: 1
            }
        }
    }