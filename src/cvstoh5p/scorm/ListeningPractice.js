'use strict'
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class ListeningPractice extends CVStoH5P {
        constructor(Lesson) {
            super(Lesson, 'ListeningPractice/');
            this.H5Plibrary = 'ListeningPractice/'
            this.subname = '/'
            this.cvs_name = 'ListeningPractice.csv'
            this.subh5pname = 'ListeningPractice'
            this.listH5Ps['ListeningPractice'] = {
                name: 'ListeningPractice',
                init: 1
            }
        }

    }