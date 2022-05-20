import smtplib
from email.message import EmailMessage
import requests
import re
from bs4 import BeautifulSoup

#크롤링 하기
header ={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32"
}

url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=nct+dream"

response = requests.get(url, headers=header)
soup = BeautifulSoup(response.text, 'html.parser')

file = open("news.txt", "w", encoding='UTF-8')

for i in soup.select_one('#main_pack > section.sc_new.cs_common_module.case_normal._au_people_content_wrap.color_20 > div.cm_content_wrap > div.cm_content_area._cm_content_area_profile > div.cm_info_box > div.detail_info > dl'):
  content = i.get_text()
  print(content)
  
  with open('news.txt', 'a', encoding='UTF-8') as f:
        f.write(f'{content}' + '\n')

#메일 보내기
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = EmailMessage()
message.set_content('해당 그룹에 대한 정보입니다.')

message["Subject"] = "크롤링해서 메일 보내기[임수연]"
message["From"] = "#####@gmail.com"
message["To"] = "#####@likelion.org"

with open('news.txt', 'rb') as f:
  data = f.read()
message.add_attachment(data, maintype='txt', subtype='txt', filename="news.txt")

def sendEmail(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if (re.match(reg,addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("#####@gmail.com", "#####")
smtp.send_message(message)
smtp.quit()