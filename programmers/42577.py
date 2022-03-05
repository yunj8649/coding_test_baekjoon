## 전화번호 목록

def solution(phone_book):
    answer = True
    
    phone_book.sort()
    
    for i in range(len(phone_book)-1):
        phone = phone_book[i]
        substr = phone_book[i+1][0: len(phone)]
        if phone_book[i]  == substr:
            answer = False
            break
        
    return answer