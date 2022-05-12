n = int(input())

words = []
for i in range(0, n):
    words.append(input())

setType = set(words)
words = list(setType)
words.sort(key=lambda x: (len(x), x))
for i in range(0, len(words)):
    print(words[i])