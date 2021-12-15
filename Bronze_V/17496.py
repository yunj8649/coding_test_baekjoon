# 스타후르츠

# 여름의 일 수 N (2 ≤ N ≤ 90) 과 
# 스타후르츠가 자라는데 걸리는 일 수 T (1 ≤ T ≤ N-1) 와 
# 스타후르츠를 심을 수 있는 칸의 수 C (1 ≤ C ≤ 300) 와 
# 스타후르츠 개당 가격 정수 P (1 ≤ P ≤ 1,000)

n, t, c, p = map(int, input().split())
print(n//t)
print((n//t)*c)
print(((n//t)*c)*p)

print((n-1)//t*c*p)