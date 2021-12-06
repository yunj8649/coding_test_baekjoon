# 심부름 가는 길

min = 0
sec = 0
totalSec = 0

for i in range(4):
    s = int(input())
    totalSec += s

min = totalSec // 60
sec = totalSec % 60

print(min)
print(sec)