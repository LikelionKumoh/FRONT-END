import smtplib
from email.message import EmailMessage

# SMTP 접속을 위한 서버, 계정 설정
SMTP_SERVER = "smtp.gmail.com"
# google의 SMTP server 포트 주소는 465
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
