# 나는 행복합니다~

# n, m, k = map(int, input().split())
# count = 0
# for i in range(n):
#     if count == k:
#         break
#     for j in range(m):
#         if count < k:
#             count += 1
#         else:
#             print(i, j)
#             break

n, m, k = map(int, input().split())
print(k//m, k%m)