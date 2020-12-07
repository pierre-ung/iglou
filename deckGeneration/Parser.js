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

/* var data = fs.readFileSync('../tests/testSet.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data); */