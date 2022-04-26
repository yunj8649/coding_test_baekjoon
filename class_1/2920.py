# 음계

numbers = list(map(int, input().split()))

step = numbers[1] - numbers[0]
result = "mixed"
for i in range(0, len(numbers)):
    if i != 0:
        prev_number = numbers[i-1]
        current_number = numbers[i]
        if (current_number - prev_number) != step:
            result = "mixed"
            break
        elif (current_number - prev_number) == 1:
            result = "ascending"
        elif (current_number - prev_number) == -1:
            result = "descending"
        
print(result)
        