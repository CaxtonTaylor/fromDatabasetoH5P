'use strict'
const HP5 = require("./src/hp5")
const h5p = new HP5();
const fse = require('fs-extra')
const glob = require('glob-promise')
const Utils = require("./lib/utils");
const utils = new Utils();
async function index(){
    // await fse.emptyDir('./UP/')
    // let Lessons = await glob('./DATABASE/**/*.json');
    // for (let index = 0; index < Lessons.length; index++) {
    //     const Lesson = Lessons[index];
    //     await h5p.processJSON(Lesson);
    // }
    //await h5p.processJSON('./DATABASE/English/General/A1/Lesson1/GeneralEnglishA1Lesson1.json');
    // await h5p.processJSON('./DATABASE/English/General/A1/Lesson2/GeneralEnglishA1Lesson2.json');
    // await h5p.processJSON('./DATABASE/English/General/A1/Lesson3/GeneralEnglishA1Lesson3.json');
    
    await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson1/GeneralEnglishWaystageLesson1.json');
    await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson2/GeneralEnglishElementaryLesson2.json');
    await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson2/GeneralEnglishLower-IntermediateLesson2.json');

    
    console.log('finish')
}
index();