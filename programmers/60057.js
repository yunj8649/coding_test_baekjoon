function sliceStr(num, str) {
    let result = '';
    let startIdx = 0;
    const subStrArr = [];
    let eqCnt = 1;
    while(startIdx < str.length) {
        const sliceStr = str.substr(startIdx, num);
        
        if (subStrArr.length === 0) {
            subStrArr.push(sliceStr);    
        } else {
            const prevStr = subStrArr.pop();
            
            if (prevStr === sliceStr) {
                eqCnt += 1
                
                if (startIdx+num >= str.length && eqCnt > 1) subStrArr.push(eqCnt);
                subStrArr.push(prevStr);
            } else {
                if (eqCnt > 1) {
                    subStrArr.push(eqCnt);
                    eqCnt = 1;
                }
                subStrArr.push(prevStr);
                subStrArr.push(sliceStr);
            }
        }
        if (num === 6) {
            console.log('eqCnt :: ', eqCnt)
            console.log('num :: ', num, ' join :: ', subStrArr.join(''))
        }
        startIdx += num;
    }
    
    return subStrArr.join('').length
}

function solution(s) {
    var answer = 0;
    const sliceStrNumArr = [];
    
    for(let i = 0; i < s.length; i++) {
        const num = sliceStr(i+1, s);
        sliceStrNumArr.push(num);
    }
    
    return Math.min(...sliceStrNumArr);
}