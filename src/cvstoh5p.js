'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const ProcessRow = require("./ProcessRow");

const fs = require("fs");
module.exports =
    class CVStoH5P {
        constructor(Lesson, nameFolder) {
            this.nameFolder = nameFolder
            this.Lesson = Lesson;
            this.listH5Ps = [];
            let lessonNumber = this.Lesson.Lesson
            if(!lessonNumber){
                lessonNumber = this.Lesson.name
            }
            this.withoutgeneralPath = this.Lesson.Level + '/Lesson' + lessonNumber  + '/' 
            let relativePath = 'English/General/' + this.withoutgeneralPath
            this.ProcessPath = './H5Pprocess/' + relativePath
            this.UPPath = './UP/' + relativePath
            this.process_row = new ProcessRow(this.Lesson, this.ProcessPath);
        }
        async init() {
            this.Lesson = await utils.readJSON(this.jsonPATH);
        }
        async makeH5Ps() {

            await this.makeFolders();
            await this.makeSubFolders();
            await this.loadJSONs();
            await this.loadCVS();
            await this.executeCVS();
            await this.updateJSONs();
            await this.zipH5Ps();
        }
        async processRow(row) {
            const _ = require('lodash');
            for (let i = 1; i < row.length; i++) {
                let column = row[i];
                if (column) {
                    try {
                        let h5pName = await this.h5pNamefromrowindex(i)
                        this.listH5Ps = await this.process_row.process(this.listH5Ps, h5pName, row, i)

                    } catch (error) {
                        console.log(`lesson_path :(${row[0]})`)
                        console.log(`column :(${column})`)
                        console.log(`# column :(${i})`)
                        throw error
                    }
                }
            }
        }
        async makeFolders() {
            await utils.emptyDir(this.ProcessPath)
            await utils.emptyDir(this.UPPath)
            await utils.createDir(this.UPPath)
        }
        async makeSubFolders() {
            let H5PTestPath = './H5Ps/' + this.H5Plibrary
            await this.updateforeachH5P(async function (h5p, h5p_name) {
                h5p.name = h5p_name
                h5p.path = this.ProcessPath + h5p_name + this.subname;
                await utils.copyDir(H5PTestPath, h5p.path);
                return h5p;
            }.bind(this))
        }
        async loadJSONs() {
            await this.updateforeachH5P(async function (h5p) {
                h5p.h5p = await utils.readJSON(h5p.path + 'h5p.json');
                h5p.content = await utils.readJSON(h5p.path + 'content/content.json');
                return h5p;
            }.bind(this))
        }
        async loadCVS() {
            this.cvs_path = './CSV/' + this.cvs_name
            let cvs = await utils.readCVS(this.cvs_path);
            cvs.shift()
            cvs.shift();//remove two rows titles
            this.cvs = cvs;
        }
        async updateJSONs() {
            await this.updateforeachH5P(async function (h5p) {
                await utils.writeJSON(h5p.path + 'h5p.json', h5p.h5p);
                await utils.writeJSON(h5p.path + 'content/content.json', h5p.content);
                return h5p;
            }.bind(this))
        }
        async zipH5Ps() {
            await this.updateforeachH5P(async function (h5p) {
                let lessonNumber = this.Lesson.Lesson
                let lessonName = this.Lesson.name.replace(/[^\x00-\x7F]/g, "").replace(/ /g, "")
                if(!lessonNumber){
                    lessonNumber = lessonName
                }
                const version = require(process.cwd()+'/package.json').version
                let h5p_name = h5p.name + '_' + this.Lesson.Level + '_' +  'Lesson' + lessonNumber  + '_' + lessonName + '_'+ 'V' + version +'.h5p';
                await utils.exec('cd ' + h5p.path + ' && zip -r ' + h5p_name + ' .');
                await utils.exec('mv ' + h5p.path + h5p_name + ' ' + this.UPPath + h5p_name, true);

                return h5p;
            }.bind(this))
        }
        async executeCVS() {

            for (let i = 0; i < this.cvs.length; i++) {
                let row = this.cvs[i];
                try {
                    await this.processRow(row);

                } catch (error) {
                    console.log(`css :(${this.cvs_path})`)
                    console.log(`fila :(${i + 3})`)
                    throw error

                }
            }
        }

        async h5pNamefromrowindex(index) {
            let name;
            await this.updateforeachH5P(async function (h5p) {

                if (index >= h5p.init) {
                    name = h5p.name;
                }
                return h5p;
            }.bind(this))
            return name
        }
        async updateforeachH5P(funct) {
            for (const h5p_name in this.listH5Ps) {
                if (this.listH5Ps.hasOwnProperty(h5p_name)) {
                    let h5p = this.listH5Ps[h5p_name];
                    h5p = await funct(h5p, h5p_name, this.listH5Ps)
                    this.listH5Ps[h5p_name] = h5p
                }
            }
        }
    }