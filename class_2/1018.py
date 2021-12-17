# 체스판 다시 칠하기
# 브루트포스 알고리즘

def rePrintCounting(board):
    printCnt = 0
    
    for i in range(len(board)):
        for j in range(len(board[0])):
            print(f'[i]: {i} / [j]: {j} / {board[i][j]}')
            if (i == 0 and j == 0):
                pass
            elif (i == 0):
                # i가 0이면 윗 줄 고려X
                if (board[i][j] == board[i][j-1]):
                    printCnt += 1
                    if (board[i][j] == 'B'): board[i][j] = 'W'
                    else: board[i][j] = 'B'
            elif (j == 0):
                # j가 0이면 왼쪽 고려X
                if (board[i][j] == board[i-1][j]):
                    printCnt += 1
                    if (board[i][j] == 'B'): board[i][j] = 'W'
                    else: board[i][j] = 'B'
            else:
                if (board[i][j] == board[i][j-1]):
                    printCnt += 1
                    if (board[i][j] == 'B'): board[i][j] = 'W'
                    else: board[i][j] = 'B'
                elif (board[i][j] == board[i-1][j]):
                    printCnt += 1
                    if (board[i][j] == 'B'): board[i][j] = 'W'
                    else: board[i][j] = 'B'
    print(printCnt)

n, m = map(int, input().split())
arr = []
for i in range(n):
    line = list(input())
    arr.append(line)

rePrintCounting(arr)
# 8x8 씩 쪼개서 최소값 구하는 로직 구현하면 됨
