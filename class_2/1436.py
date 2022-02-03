# 첫째 줄에 숫자 N이 주어진다. N은 10,000보다 작거나 같은 자연수이다.
# 1번째 666

n = int(input())
count = 0
title = 0

while(count != n) :
    if '666' in str(title):
        count += 1
        title += 1
    else:
        title += 1

print(title - 1)
