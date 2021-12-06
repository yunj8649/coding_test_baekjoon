# 오늘 날짜
from datetime import datetime
from pytz import timezone

today = datetime.now(timezone('Asia/Seoul'))

now = datetime.datetime.now()
print(now.strftime('%Y-%m-%d'))

d=datetime.date.today()   #오늘 날짜의 date 객체 생성
print(d.isoformat())    #date 객체의 정보를 'YYYY-MM-DD'형태의 문자열로 반환하는 메서드