# Vera and Outfits 

def fac(n) : 
    ans = 1 
    if n == 0 : 
        return 1 
    else : 
        for i in range(1, n + 1) : 
            ans = ans * i 
        return ans

def com(n, r) : 
    return fac(n) / fac(r) / fac(n - r)

n = int(input())
print(int(com(2,n)))