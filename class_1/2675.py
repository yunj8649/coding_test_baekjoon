# 2
# 3 ABC
# 5 /HTP

test_count = int(input())
print_str = [];
for i in range(0, test_count): 
    count, word = list(input().split(' '))
    repeat_word = ''
    for j in range(0, len(word)):
        repeat_alphabet = word[j]
        for _ in range(0, int(count)):
            repeat_word = repeat_word + repeat_alphabet
    print_str.append(repeat_word)

for i in range(len(print_str)):
    print(print_str[i])