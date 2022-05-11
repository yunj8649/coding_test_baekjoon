# print(ord("a"))
# print(ord("z"))

# baekjoon

# word = "baekjoon"
word = input()
index_arr = []
for i in range(ord("a"), ord("z")+1):
    index_arr.append(word.find(chr(i)))

print(*index_arr, sep=' ')