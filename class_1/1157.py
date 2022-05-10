from collections import Counter

word = input().upper()

# 이거 없으면 런타임 에러남
if len(word) == 1 :
    print(word)
    quit()

word_count = list(Counter(word).items())
word_count.sort(reverse=True, key=lambda x:x[1])

if word_count[0][1] == word_count[1][1]:
    print('?')
else:
    print(word_count[0][0])