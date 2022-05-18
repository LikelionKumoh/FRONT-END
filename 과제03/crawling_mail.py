from fileinput import filename
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import smtplib
from email.message import EmailMessage
import re

header = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
}

url = 'https://sports.news.naver.com/kbaseball/record/index?category=kbo&year=2022'

response = requests.get(url, headers=header)
result = BeautifulSoup(response.text, 'html.parser')

html_file = open("kbo.html", "w", encoding='utf-8')
html_file.write(response.text)
text = []
kbo = result.findAll("td", "tm")
text_file = open("kbo.txt", "w", encoding='utf-8')

text_file.write(datetime.today().strftime("%Y년 %m월 %d일\n"))

rank = 1
for result in kbo:
  text_file.write(str(rank)+ '위: '+ result.get_text().strip('\n')+ '\n')
  rank += 1

#제목: 크롤링해서 메일 보내기[김동국]
#보내는 분 = 지메일
#받는 분 = kit@likelion.org
#filename = txt.name
#유효성 검사

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

def sendEmail(addr):
  global messgae
  reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
  if bool(re.match(reg,addr)):
      smtp.send_message(message)
      print("정상적으로 메일이 발송되었습니다.")
  else:
      print("유효한 이메일 주소가 아닙니다.")

message = EmailMessage()
message.set_content('본문: 크롤링해서 메일 보내기[김동국]')

message["Subject"] = "크롤링해서 메일 보내기[김동국]"
message['To'] = "#####@likelion.org"
message['From'] = "#####@gmail.com"

with open('kbo.txt', 'rb') as f:
  data = f.read()
message.add_attachment(data, maintype='txt', subtype='txt', filename="kbo.txt")

smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
smtp.login("#####@gmail.com","#####")
smtp.send_message(message)


sendEmail("#####@likelion.org")
smtp.quit()

html_file.close()