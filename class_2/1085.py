# 6 2 10 3

x, y, w, h = map(int, input().split())

distance = [ w-x, x, y, h-y ]
print(min(distance))
