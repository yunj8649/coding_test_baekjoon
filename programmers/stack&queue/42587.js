// 프린터

function solution(priorities, location) {
    var answer = 0;
    let arrayIndex = priorities.length - 1
    
    while(priorities.length !== 0) {
        const lastItem = priorities.pop()
        const minItem = Math.min(priorities)
        
        if (minItem < lastItem) priorities.unshift(lastItem)
        else {
            arrayIndex--
            answer++
        }
        if (location === arrayIndex) break
    }
    
    return answer;
}