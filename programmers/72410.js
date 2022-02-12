function solution(new_id) {
    var answer = new_id;
    // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    answer = answer.toLowerCase();
    // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    const reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/gim;
    answer = answer.replace(reg, "");
    // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    answer = replaceDots(answer);
    // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    answer = startEndFindDots(answer);
    // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if (answer.length === 0) answer = 'a'
    // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    //      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if (answer.length >= 16) answer = answer.slice(0, 15);
    answer = startEndFindDots(answer);
    // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
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