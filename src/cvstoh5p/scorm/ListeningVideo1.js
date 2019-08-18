'use strict'
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class ListeningVideo1 extends CVStoH5P {
        constructor(Lesson) {
            super(Lesson, 'ListeningVideo1/');
            this.H5Plibrary = 'ListeningVideo1/'
            this.subname = '/'
            this.cvs_name = 'ListeningVideo1.csv'
            this.subh5pname = 'ListeningVideo1'
            this.listH5Ps['ListeningVideo1'] = {
                name: 'ListeningVideo1',
                init: 1
            }
        }

    }