from bs4 import BeautifulSoup
import requests
import smtplib
from email.message import EmailMessage
import re
from datetime import datetime


def sendEmail(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg, addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")


headers = {
    'User-Agent': '######################################################'
}

url = 'https://movie.naver.com/movie/bi/fi/prize.naver?code=19&rnd=58'

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

html_file = open("white_reward.html", "w", encoding='utf8')
html_file.write(response.text)
html_file.close()

results = soup.findAll('a', 'top_5')
piece_list = []
for i in results:
    piece_list.append(i.get_text())
piece_list = set(piece_list)

search_file = open("search_reward.txt", "w", encoding='utf8')


rank = 1

print(datetime.today().strftime("%Y년 %m월 %d일 기준, 2022년 백상예술대상 수상작품 내역입니다..\n"))

for i in piece_list:
    if(i == ""):
        continue
    search_file.write(str(rank)+"."+i+"\n")
    print(str(rank)+".", i)
    rank += 1
search_file.close()

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = EmailMessage()
message.set_content("2022년 5월에 있었던 백상예술대상의 수상작들을 모두 모았습니다.")

message["Subject"] = "크롤링해서 메일보내기[이태헌]"
message["From"] = "###############"
message["To"] = "###############"


with open("search_reward.txt", "rb") as text:
    text_file = text.read()

message.add_attachment(text_file, maintype='image',
                       subtype='text', filename='백상예술대상_수상작')


smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("###############", "##########")
sendEmail("###############")
smtp.quit()
