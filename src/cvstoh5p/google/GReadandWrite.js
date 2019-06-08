'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GReadandWrite extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GReadandWrite/');
            this.nameFolder = 'GReadandWrite/'
            this.H5Plibrary = 'GReadandWrite/'
            this.subname = '/'
            this.cvs_name = 'GReadandWrite.csv'
            this.subh5pname = 'GReadandWrite'
            this.listH5Ps['GReadandWrite'] = {
                name: 'GReadandWrite',
                init: 1
            }
        }
    }