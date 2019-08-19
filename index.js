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

    await h5p.processJSON('./DATABASE/English/General/A1/Lesson1/GeneralEnglishA1Lesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/B1_3/Lesson20/GeneralEnglishB1_3Lesson20.json')

    await h5p.processJSON('./DATABASE/English/General/Basic/Lesson1/GeneralEnglishBasicLesson1.json')
    await h5p.processJSON('./DATABASE/English/General/Basic/Lesson2/GeneralEnglishBasicLesson2.json')
    await h5p.processJSON('./DATABASE/English/General/Basic/Lesson3/GeneralEnglishBasicLesson3.json')
   
    await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson1/GeneralEnglishElementaryLesson1.json')
    await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson2/GeneralEnglishElementaryLesson2.json')
    await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson3/GeneralEnglishElementaryLesson3.json')
    
    await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson1/GeneralEnglishWaystageLesson1.json')
    await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson2/GeneralEnglishWaystageLesson2.json')
    await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson3/GeneralEnglishWaystageLesson3.json')
    
    await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson1/GeneralEnglishLower-IntermediateLesson1.json')
    await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson3/GeneralEnglishLower-IntermediateLesson3.json')
    await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson2/GeneralEnglishLower-IntermediateLesson2.json')
    console.log('finish')
}
index();
