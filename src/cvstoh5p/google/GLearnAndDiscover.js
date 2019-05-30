'use strict'
const Utils = require("../../../lib/utils");
const utils = new Utils();
const CVStoH5P = require("../../cvstoh5p");
module.exports =
    class GLearnAndDiscover extends CVStoH5P {

        constructor(Lesson) {
            super(Lesson, 'GLearnAndDiscover/');
            this.nameFolder = 'GLearnAndDiscover/'
            this.H5Plibrary = 'GLearnAndDiscover/'
            this.subname = '/'
            this.cvs_name = 'GLearnAndDiscover.csv'
            this.subh5pname = 'GLearnAndDiscover'
            this.listH5Ps['GLearnAndDiscover'] = {
                name: 'GLearnAndDiscover',
                init: 1
            }
        }
    }