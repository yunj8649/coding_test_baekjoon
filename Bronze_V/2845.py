# 파티가 끝나고 난 뒤

# 1m2당 사람의 수 L (1 ≤ L ≤ 10)과 파티가 열렸던 곳의 넓이 P (1 ≤ P ≤ 1000)
l, p = map(int, input().split())
arr = list(map(int, input().split()))

cnt = l * p
for i in range(len(arr)):
    print((arr[i] - cnt), end=' ')