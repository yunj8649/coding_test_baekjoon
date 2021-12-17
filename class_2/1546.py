# 모든 점수를 점수/M*100

n = int(input())
arr = list(map(int, input().split()))

sum = 0
for i in range(n):
    newScore = (arr[i]/max(arr)) * 100
    sum += newScore
    
print(sum/n)