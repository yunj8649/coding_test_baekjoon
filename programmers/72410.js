function solution(new_id) {
    var answer = new_id;
    answer = answer.toLowerCase();
    const reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/gim;
    answer = answer.replace(reg, "");
    answer = replaceDots(answer);
    answer = startEndFindDots(answer);
    if (answer.length === 0) answer = 'a'
    if (answer.length >= 16) answer = answer.slice(0, 15);
    answer = startEndFindDots(answer);
    answer = checkLengthThreeOver(answer);
    
    return answer;
}

function replaceDots(id) {
    let result = id;

    if ( result.indexOf('..') < 0 ) return result;
    result = result.replace('..', '.')       
    return replaceDots(result);
}

function startEndFindDots(id) {
    let result = id;
    if (result[0] === '.') result = result.slice(1)
    if (result[result.length-1] === '.') result = result.slice(0, result.length - 1)
    return result;
}

function checkLengthThreeOver(id) {
    let result = id;
    if (result.length > 2 ) return result;
    const lastStr = result[result.length-1];
    return checkLengthThreeOver(result+lastStr);
}