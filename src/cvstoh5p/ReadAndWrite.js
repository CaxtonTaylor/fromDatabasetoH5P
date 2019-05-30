'use strict'
const Utils = require("../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../cvstoh5p");
module.exports =
    class ReadAndWrite extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'ReadAndWrite/');
            this.H5Plibrary = 'ReadAndWrite/'
            this.subname = '/'
            this.cvs_name = 'ReadAndWrite.csv'
            this.subh5pname = 'ReadAndWrite'
            this.listH5Ps['ReadAndWrite'] = {
                name: 'ReadAndWrite',
                init: 1
            }
        }

    }