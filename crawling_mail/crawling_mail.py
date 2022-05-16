import smtplib
from email.message import EmailMessage
from bs4 import BeautifulSoup
import requests
from datetime import datetime

#### 크롤링해서 메모장에 저장 파트 ####
header = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36"
}

url = "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=코인"
response = requests.get(url, headers=header)
soup = BeautifulSoup(response.text, 'html.parser')

news_titles = soup.select("a.news_tit")
time = datetime.today()

print(datetime.today().strftime("%Y년 %m월 %d일의 코인 기사입니다.\n"))

file = open("coin_news.txt", "w", encoding='UTF-8')
file.write(time.strftime("%Y년 %m월 %d일의 코인 기사입니다.\n"))
file.close()

for i in news_titles:
    title = i.get_text()
    href = i.attrs['href']

    print(title)
    print(href)

    with open('coin_news.txt', 'a', encoding='UTF-8') as f:
        f.write(f'{title} / {href}'+'\n')

#### 메일 보내기 파트 ####
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = EmailMessage()
message.set_content("오늘의 코인 관련 기사 모음")

message["Subject"] = "크롤링해서 메일보내기[박규현]"
message["From"] = "####@likelion.org"
message["To"] = "####@gmail.com"

file = 'coin_news.txt'
fp = open(file, 'rb')     # read binary. open() : 파일을 실제로 읽어오는건 아님. 파일을 선택하는 것.
fp

file_data = fp.read()    # read() : 파일을 읽어옴.
file_data

# 파일을 첨부한다. (파일에 대한 옵션)
message.add_attachment(file_data, maintype='text',
                       subtype='plain', filename=file)

# 이메일 유효성 검사 함수


def is_valid(addr):
    import re
    if re.match('(^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,3}$)', addr):
        return True
    else:
        return False


smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("####@likelion.org", "####")
smtp.send_message(message)
smtp.quit()
