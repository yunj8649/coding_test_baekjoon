# 121 yes
# 1231 no
# 12421 yes
# 0

from math import floor

while(True):
    num = input()
    if (int(num) == 0): 
        break
    num = str(num)
    isPalindrome = 'yes'
    for i in range(0, floor(len(num)/2)):
        if num[i] != num[len(num)-(i+1)]:
            isPalindrome = 'no'
            break
    print(isPalindrome)
            
    
