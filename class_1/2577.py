# 숫자의 개수 

a = int(input())
b = int(input())
c = int(input())
number = str(a*b*c)

numberArray = list(number)

for i in range(0, 10):
    print(numberArray.count(str(i))) 