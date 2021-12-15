# 달달함이 넘쳐흘러

a = list(map(int, input().split()))
c = list(map(int, input().split()))
b = [c[0]-a[2], c[1]//a[1], c[2]-a[0]]
print(*b)