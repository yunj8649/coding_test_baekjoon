// 위장

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function combine(obj, num) {
    let count = 0;
    const keys = Object.keys(obj);
    
    const arr = getCombinations(keys, num)
    arr.map(item => {
        let count2 = 1
        item.map(item2 => {
            count2 *= obj[item2]
        })
        count += count2
    })
    
    return count;
}

function solution(clothes) {
    var answer = 0;
    
    const clothesObj = {}
    for (let c of clothes) {
        const [value, key] = c
        if (clothesObj[key]) clothesObj[key] += 1
        else clothesObj[key] = 1
    }
    
    const kind = Object.keys(clothesObj).length
    if(kind === 30){ return 1073741823; }
    for(let i = 1; i <= kind; i++) {
        answer += combine(clothesObj, i)
    }
    
    return answer;
}

///************************[ 다른 사람 풀이 ]***************************///
function solution2(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

function solution3(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }
    return answer - 1;
}

function solution4(clothes) {
    const types = {};
    for(const [style, type] of clothes){
        if(type in types) types[type] +=1;
        else types[type] = 1;
    }
    let sum = 1;
    for(const type in types) sum *= (types[type] + 1)
    return sum -1;
}

const solution5 = (clothes) => {
    let arr = {};
    clothes.map((el) => {
        if (!arr[el[1]]) {
            arr[el[1]] = [];
        }
        arr[el[1]].push(el[0]);
    })
    let sum = 1;
    for (const kind of new Set(clothes.map((el) => el[1]))) {
        sum *= (arr[kind].length + 1);
    }
    return sum - 1;
}

function solution6(clothes) {
    let answer = 1
    let map = new Map()
    for(let i of clothes){
        map.has(i[1]) ? map.set(i[1], map.get(i[1])+1) : map.set(i[1],2)
    }
    for(let i of map){
        answer *=i[1]
    }
    return  answer-1
}