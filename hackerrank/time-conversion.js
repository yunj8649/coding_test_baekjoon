'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let [ hour, min, sec ] = s.split(':');
    const fotmat = sec.slice(2);
    sec = sec.substring(0, 2)
    hour = Number(hour)
    if ( fotmat === 'AM' && hour > 11 ) hour -= 12
    if ( fotmat === 'PM' && hour < 12 ) hour += 12
    const convertTime = `${hour < 10 ? `0${hour}` : hour}:${min}:${sec}`;
    return convertTime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
