# 상수
# 734 893 > 437
# print(a[::-1])
# print(''.join(reversed(a)))

a, b = list(map(str, input().split(' ')))

a = int(a[::-1])
b = int(b[::-1])
if a > b:
    print(a)
else:
    print(b)