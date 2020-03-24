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

    //  await h5p.processJSON('./DATABASE/English/General/Basic/Lesson1/GeneralEnglishBasicLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson2/GeneralEnglishBasicLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson3/GeneralEnglishBasicLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson4/GeneralEnglishBasicLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson5/GeneralEnglishBasicLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson6/GeneralEnglishBasicLesson6.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson7/GeneralEnglishBasicLesson7.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson8/GeneralEnglishBasicLesson8.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson9/GeneralEnglishBasicLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson10/GeneralEnglishBasicLesson10.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson11/GeneralEnglishBasicLesson11.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson12/GeneralEnglishBasicLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson13/GeneralEnglishBasicLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson14/GeneralEnglishBasicLesson14.json')
    // await h5p.processJSON('./DATABASE/English/General/Basic/Lesson15/GeneralEnglishBasicLesson15.json')

    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson1/GeneralEnglishElementaryLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson2/GeneralEnglishElementaryLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson3/GeneralEnglishElementaryLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson4/GeneralEnglishElementaryLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson5/GeneralEnglishElementaryLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson6/GeneralEnglishElementaryLesson6.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson7/GeneralEnglishElementaryLesson7.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson8/GeneralEnglishElementaryLesson8.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson9/GeneralEnglishElementaryLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson10/GeneralEnglishElementaryLesson10.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson11/GeneralEnglishElementaryLesson11.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson12/GeneralEnglishElementaryLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson13/GeneralEnglishElementaryLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson14/GeneralEnglishElementaryLesson14.json')
    // await h5p.processJSON('./DATABASE/English/General/Elementary/Lesson15/GeneralEnglishElementaryLesson15.json')

    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson1/GeneralEnglishWaystageLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson2/GeneralEnglishWaystageLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson3/GeneralEnglishWaystageLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson4/GeneralEnglishWaystageLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson5/GeneralEnglishWaystageLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson6/GeneralEnglishWaystageLesson6.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson7/GeneralEnglishWaystageLesson7.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson8/GeneralEnglishWaystageLesson8.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson9/GeneralEnglishWaystageLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Waystage/Lesson10/GeneralEnglishWaystageLesson10.json')
    
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson1/GeneralEnglishLower-IntermediateLesson1.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson2/GeneralEnglishLower-IntermediateLesson2.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson3/GeneralEnglishLower-IntermediateLesson3.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson4/GeneralEnglishLower-IntermediateLesson4.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson5/GeneralEnglishLower-IntermediateLesson5.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson6/GeneralEnglishLower-IntermediateLesson6.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson7/GeneralEnglishLower-IntermediateLesson7.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson8/GeneralEnglishLower-IntermediateLesson8.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson9/GeneralEnglishLower-IntermediateLesson9.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson10/GeneralEnglishLower-IntermediateLesson10.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson11/GeneralEnglishLower-IntermediateLesson11.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson12/GeneralEnglishLower-IntermediateLesson12.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson13/GeneralEnglishLower-IntermediateLesson13.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson14/GeneralEnglishLower-IntermediateLesson14.json')
    // await h5p.processJSON('./DATABASE/English/General/Lower-Intermediate/Lesson15/GeneralEnglishLower-IntermediateLesson15.json')

    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson13/GeneralEnglishA2_1Lesson13.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson14/GeneralEnglishA2_1Lesson14.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson15/GeneralEnglishA2_1Lesson15.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson16/GeneralEnglishA2_1Lesson16.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson17/GeneralEnglishA2_1Lesson17.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson18/GeneralEnglishA2_1Lesson18.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson19/GeneralEnglishA2_1Lesson19.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson20/GeneralEnglishA2_1Lesson20.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson21/GeneralEnglishA2_1Lesson21.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson22/GeneralEnglishA2_1Lesson22.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson23/GeneralEnglishA2_1Lesson23.json');   
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson24/GeneralEnglishA2_1Lesson24.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson25/GeneralEnglishA2_1Lesson25.json');    
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson26/GeneralEnglishA2_1Lesson26.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson27/GeneralEnglishA2_1Lesson27.json');       
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson28/GeneralEnglishA2_1Lesson28.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson29/GeneralEnglishA2_1Lesson29.json');   
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson30/GeneralEnglishA2_1Lesson30.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson31/GeneralEnglishA2_1Lesson31.json');    
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson32/GeneralEnglishA2_1Lesson32.json');
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson33/GeneralEnglishA2_1Lesson33.json');   
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson34/GeneralEnglishA2_1Lesson34.json');   
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson35/GeneralEnglishA2_1Lesson35.json');   
    // await h5p.processJSON('./DATABASE/English/General/A2_1/Lesson36/GeneralEnglishA2_1Lesson36.json');   
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson1/GeneralEnglishIntermediateLesson1.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson2/GeneralEnglishIntermediateLesson2.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson3/GeneralEnglishIntermediateLesson3.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson4/GeneralEnglishIntermediateLesson4.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson5/GeneralEnglishIntermediateLesson5.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson6/GeneralEnglishIntermediateLesson6.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson7/GeneralEnglishIntermediateLesson7.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson8/GeneralEnglishIntermediateLesson8.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson8/GeneralEnglishIntermediateLesson8.json');
    await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson9/GeneralEnglishIntermediateLesson9.json');
    // await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson10/GeneralEnglishIntermediateLesson10.json');
     await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson11/GeneralEnglishIntermediateLesson11.json');
     await h5p.processJSON('./DATABASE/English/General/Intermediate/Lesson12/GeneralEnglishIntermediateLesson12.json');

    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson1/GeneralEnglishPre-IntermediateLesson1.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson2/GeneralEnglishPre-IntermediateLesson2.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson3/GeneralEnglishPre-IntermediateLesson3.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson4/GeneralEnglishPre-IntermediateLesson4.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson6/GeneralEnglishPre-IntermediateLesson6.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson6/GeneralEnglishPre-IntermediateLesson6.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson7/GeneralEnglishPre-IntermediateLesson7.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson8/GeneralEnglishPre-IntermediateLesson8.json');
    // await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson9/GeneralEnglishPre-IntermediateLesson9.json');
     await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson10/GeneralEnglishPre-IntermediateLesson10.json');
     //  await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson11/GeneralEnglishPre-IntermediateLesson11.json');
     //  await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson12/GeneralEnglishPre-IntermediateLesson12.json');
     await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson13/GeneralEnglishPre-IntermediateLesson13.json');
     await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson14/GeneralEnglishPre-IntermediateLesson14.json');
     await h5p.processJSON('./DATABASE/English/General/Pre-Intermediate/Lesson15/GeneralEnglishPre-IntermediateLesson15.json');

     console.log('finish')
}
index();