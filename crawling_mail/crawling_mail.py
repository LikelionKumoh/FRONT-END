from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import requests
from bs4 import BeautifulSoup
import smtplib

headers = {
    'User-Agent' : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
}

url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B5%AC%EB%AF%B8+%EB%A7%9B%EC%A7%91&oquery=%EA%B5%AC%EB%AF%B8+%EC%98%A5%EA%B3%84+%EB%A7%9B%EC%A7%91&tqi=hFzXSdp0J1sssj9IRzCssssssx0-150696"

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

re = soup.find_all("span","OXiLu")

file_name = "gumi_restaurant_list.txt"
file = open(file_name, "w", encoding="UTF-8")
for r in re:
    file.write(r.get_text()+'\n')
file.close()

#----------------------------------------------------------------


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = MIMEMultipart()
message["Subject"] = "크롤링해서 메일보내기[박형준]"
message["From"] = "#######@gmail.com"
message["To"] = "##############@likelion.org"

content = "구미 맛집 리스트"
content_part = MIMEText(content,"plain")
message.attach(content_part)
 
with open(file_name, "rb") as f:
    txt_file = MIMEApplication(f.read())
    txt_file.add_header("Content-Disposition","attachment",filename=file_name)
    message.attach(txt_file)

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("##############@gmail.com", "###################")
smtp.send_message(message)
smtp.quit()

