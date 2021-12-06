# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

n = int(input())

for i in range(n):
    x, y = map(int, input().split())
    print(f'Case #{i+1}: {x+y}')