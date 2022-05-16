from bs4 import BeautifulSoup
import requests
from datetime import datetime

header = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36"
}

url = "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=코인"
response = requests.get(url, headers=header)
soup = BeautifulSoup(response.text, 'html.parser')

news_titles = soup.select("a.news_tit")
time = datetime.today()

print(datetime.today().strftime("%Y년 %m월 %d일의 코인 기사입니다.\n"))  # 출력문구

file = open("coin_news.txt", "w", encoding='UTF-8')  # 메모장 열고 쓰기'w'(한글 인코딩)
file.write(time.strftime("%Y년 %m월 %d일의 코인 기사입니다.\n"))  # 오늘 날짜 표시하기 위함
file.close()  # 파일을 닫음

for i in news_titles:
    title = i.get_text()
    href = i.attrs['href']
    print(title)  # 기사 제목 출력
    print(href)  # 링크 출력

    with open('coin_news.txt', 'a', encoding='UTF-8') as f:  # 앞서 만든 메모장을 열고 추가'a'(한글 인코딩)
        f.write(f'{title} / {href}'+'\n')  # 출력하는 문구에 대한 메세지
