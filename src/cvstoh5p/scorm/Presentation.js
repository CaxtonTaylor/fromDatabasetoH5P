'use strict'
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class Presentation extends CVStoH5P {
        constructor(Lesson) {
            super(Lesson, 'Presentation/');
            this.H5Plibrary = 'Presentation/'
            this.subname = '/'
            this.cvs_name = 'Presentation.csv'
            this.subh5pname = 'Presentation'
            this.listH5Ps['Presentation'] = {
                name: 'Presentation',
                init: 1
            }
        }

    }