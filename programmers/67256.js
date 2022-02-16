function solution(numbers, hand) {
    var answer = '';
    let leftIndex = keyPadFindIndex('*');
    let rightIndex = keyPadFindIndex('#');
    
    numbers.map(number => {
        const numberStr = number.toString();
        if ([1,4,7].includes(number)) {
            answer += 'L'
            leftIndex = keyPadFindIndex(numberStr);
        } else if ([3,6,9].includes(number)) {
            answer += 'R'
            rightIndex = keyPadFindIndex(numberStr);
        } else {
            const numberIndex = keyPadFindIndex(numberStr);
            const leftDistance = getDistance(leftIndex, numberIndex);
            const rigthDistance = getDistance(rightIndex, numberIndex);
            
            if ( leftDistance < rigthDistance ) {
                answer += 'L';
                leftIndex = keyPadFindIndex(numberStr);
            } else if ( leftDistance > rigthDistance ) {
                answer += 'R';
                rightIndex = keyPadFindIndex(numberStr);
            } else if ( leftDistance === rigthDistance ) {
                if ( hand === 'left' ) {
                     answer += 'L';
                    leftIndex = keyPadFindIndex(numberStr);
                } else {
                    answer += 'R';
                    rightIndex = keyPadFindIndex(numberStr);
                }
            }
        }
        
    })
    return answer;
}

function keyPadFindIndex(key) {
    const keyPad = [
        //0    1    2
        ['1', '2', '3'],    //0
        ['4', '5', '6'],    //1
        ['7', '8', '9'],    //2
        ['*', '0', '#'],    //3
    ];
    
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3; j++) {
            if (key === keyPad[i][j]) {
                return [j, i];
            }
        }
    }
     
    return;
}

function getDistance(handIndex, targetIndex) {
    const distance = Math.abs(handIndex[0] - targetIndex[0]) + Math.abs(handIndex[1] - targetIndex[1]);
    return distance;
}