from collections import Counter

word = input().upper()
word_count = Counter(word) 
print(word_count)
print(word_count.items())

for key,value in word_count:
    print(key,':',value)
    # print(valeu)