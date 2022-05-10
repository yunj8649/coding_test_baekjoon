# 나머지

division_rest = []
for i in range(0, 10):
    num = int(input())
    rest = num%42
    if not (rest in division_rest):
        division_rest.append(rest)
        
print(len(division_rest))
    