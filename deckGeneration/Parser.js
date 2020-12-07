//const CardClass = require('./CardClass.js');

const fs = require('fs');


function readCouple(couple){
    var tmp = couple.split(coupleSep);
    var fst = parseInt(tmp[0]);
    var scd = parseInt(tmp[1]);
    return {fst, scd};
}

const coupleMax = ({fst, scd}) => Math.max(fst, scd);
const coupleMin = ({fst, scd}) => Math.min(fst, scd);

function csvToArray(path){
    var res = 

    fs.readFileSync(path)
    .toString() // convert Buffer to string
    .split(';') // split cols
    .map(e => e.split('\n').map(e => e.trim())); // split each line to array

    return res;
}
var a = csvToArray('../test/testSet.csv');
console.log(a);