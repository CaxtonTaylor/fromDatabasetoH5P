'use strict'
const HP5 = require("./src/hp5")
const h5p = new HP5();
async function index(){
    
    await h5p.processJSON('./DATABASE/English/General/A1/Lesson1/GeneralEnglishA1Lesson1.json');
}
index();