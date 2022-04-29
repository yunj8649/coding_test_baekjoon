arr = []

while(True):
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    else:
        arr.append([a,b])
        
for item in arr:
    print(item[0]+item[1])