// 크레인 인형뽑기 게임

function solution(board, moves) {
    let answer = 0;
    let basket = [];

    moves.map(move => {
        for(let i = 0; i < board.length; i++) {
             if (board[i][move-1] !== 0) {
                 let newItem = board[i][move-1];
                 board[i][move-1] = 0

                 if ( basket.length > 0 && basket[basket.length-1] === newItem ) {
                     answer += 2
                     basket.pop()
                 } else {
                     basket.push(newItem);
                 }
                 break;
             }
        }
    })

    return answer;
}s