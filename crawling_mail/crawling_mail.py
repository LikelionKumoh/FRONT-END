from datetime import datetime
import requests
from bs4 import BeautifulSoup
import re
import smtplib
from email.message import EmailMessage
import imghdr


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 Edg/101.0.1210.39'
}

url ='https://www.genie.co.kr/chart/top200'
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')
rank=1

results = soup.findAll("a","title ellipsis")


search_rank_file = open("rankresult.txt","a", encoding="UTF-8")


for result in results:
    search_rank_file.write(str(rank)+"위:"+result.get_text())
    print(rank,"위 : ",result.get_text()+'\n')
    rank += 1

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

def sendEmail(addr):
    reg = "^[a-zA-Z0-9,+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg, addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 보내졌습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")


message = EmailMessage()
message.set_content("오늘의 음악 순위를 알려드립니다.")

message["Subject"] = "크롤링해서 메일보내기[김민경]"
message["From"] = "##@likelion.org"
message["To"] = "##@likelion.org"

with open("rankresult.txt","rb") as txt:
    txt_file = txt.read()

message.add_attachment(txt_file,maintype='txt',subtype='txt', filename=txt.name)

smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_POR)
smtp.login("##@likelion.org","####")

sendEmail("##@likelion.org")
smtp.quit    