# XO

num = int(input())
inputs = []

for i in range(0, num):
    quizResult = list(input())
    inputs.append(quizResult)

for inputNumber in inputs:
    score = 0
    total = 0
    for i in range(0, len(inputNumber)):
        item = inputNumber[i]
        score += 1
        
        if item == 'X':
            score = 0
        total += score
        
    print (total)
    
# def calc(s):
#     i = len(s)
#     return i * (i + 1) // 2
# for _ in range(int(input())):
#     print(sum(map(calc, input().split('X'))))
    
# n = int(input())
# for i in range(1,n+1):
# 	b= 0
# 	c =1
# 	a = input()
# 	for j in a:
# 		if j=="O":
# 			b=b+c
# 			c+=1
# 		else:
# 			c=1
# 	print(b)