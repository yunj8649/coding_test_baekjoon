# 5
# 4 1 5 2 3
# 5
# 1 3 7 9 5


n = int(input())
arr = map(int, input().split())
m = int(input())
arr2 = map(int, input().split())

for i in arr2:
    # print(i, '----', arr)
    if i in arr:
        print(1)
    else:
        print(0)