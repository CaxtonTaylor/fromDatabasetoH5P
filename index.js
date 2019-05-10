'use strict'
const HP5 = require("./hp5")
const h5p = new HP5();
async function index(){
    await h5p.init();
}
index();