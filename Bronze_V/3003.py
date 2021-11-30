# 킹, 퀸, 룩, 비숍, 나이트, 폰

# 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

chessmen = [1, 1, 2, 2, 2, 8]
current = list(map(int, input().split()))

for i in range(len(chessmen)):
    print(chessmen[i]-current[i], end=' ')
