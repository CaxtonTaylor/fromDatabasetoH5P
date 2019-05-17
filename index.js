'use strict'
const HP5 = require("./src/hp5")
const h5p = new HP5();
const fse = require('fs-extra')
async function index(){
    await fse.emptyDir('./UP/')
    await h5p.processJSON('./DATABASE/English/General/A1/Lesson1/GeneralEnglishA1Lesson1.json');
    console.log('finish')
}
index();