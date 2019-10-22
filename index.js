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

    // await h5p.processJSON('./DATABASE/English/General/A1/Lesson1/GeneralEnglishA1Lesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/B1_3/Lesson19/GeneralEnglishB1_3Lesson19.json')

    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson1/GeneralEnglishBasicLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson2/GeneralEnglishBasicLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson3/GeneralEnglishBasicLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson4/GeneralEnglishBasicLesson4.json')
    await h5p.processJSON('./DATABASE/English/General/Basic/Lesson5/GeneralEnglishBasicLesson5.json')
    await h5p.processJSON('./DATABASE/English/General/Basic/Lesson7/GeneralEnglishBasicLesson7.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson8/GeneralEnglishBasicLesson8.json')

    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson12/GeneralEnglishBasicLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson13/GeneralEnglishBasicLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson5/GeneralEnglishBasicLesson5.json')

    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson1/GeneralEnglishElementaryLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson2/GeneralEnglishElementaryLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson3/GeneralEnglishElementaryLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson4/GeneralEnglishElementaryLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson8/GeneralEnglishElementaryLesson8.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson9/GeneralEnglishElementaryLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson11/GeneralEnglishElementaryLesson11.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson12/GeneralEnglishElementaryLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson13/GeneralEnglishElementaryLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson15/GeneralEnglishElementaryLesson15.json')

    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson1/GeneralEnglishWaystageLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson2/GeneralEnglishWaystageLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson3/GeneralEnglishWaystageLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson4/GeneralEnglishWaystageLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson5/GeneralEnglishWaystageLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson10/GeneralEnglishWaystageLesson10.json')
    
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson1/GeneralEnglishLower-IntermediateLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson2/GeneralEnglishLower-IntermediateLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson3/GeneralEnglishLower-IntermediateLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson4/GeneralEnglishLower-IntermediateLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson5/GeneralEnglishLower-IntermediateLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson9/GeneralEnglishLower-IntermediateLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson10/GeneralEnglishLower-IntermediateLesson10.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson11/GeneralEnglishLower-IntermediateLesson11.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson12/GeneralEnglishLower-IntermediateLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson13/GeneralEnglishLower-IntermediateLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson14/GeneralEnglishLower-IntermediateLesson14.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson15/GeneralEnglishLower-IntermediateLesson15.json')

    console.log('finish')
}
index();
