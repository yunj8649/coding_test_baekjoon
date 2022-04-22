arr = []
for i in range(1, 10):
    number = int(input())
    arr.append(number)

number_max = max(arr)
print(number_max)
print(arr.index(number_max)+1)
