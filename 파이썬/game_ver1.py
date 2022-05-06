import random
from re import X
import time
from tkinter import Y
from tracemalloc import stop

Mapsize = int(input("맵 크기를 입력해주세요 : "))
Bombsize= int(input("폭탄 갯수를 입력해주세요 : "))
Maplist = []
userX = 0
userY = 0

#맵을 만드는 함수
def Mapmake(ms,bs): 
    for _ in range(ms):
        sublist = ['⬜' for _ in range(ms)]
        Maplist.append(sublist)
        Maplist[userX][userY] = '🔳'

    while True:
        X = random.randint(0,ms-1)
        Y = random.randint(0,ms-1)

        if((X != 0) or (Y != 0)):
            Maplist[X][Y] = '💠'
            break
    
    for _ in range(bs):
        while True:
            X = random.randint(0,ms-1)
            Y = random.randint(0,ms-1)
        
            if((Maplist[X][Y] != '💠') & (Maplist[X][Y]!='🔳')):
                Maplist[X][Y] = '🔺'
                break
#맵을 만들고 출력
Mapmake(Mapsize,Bombsize)
print('========== 게임을 시작합니다 ==========')

#출력
while True:
    for i in range(Mapsize):
        for k in range(Mapsize):
            print(Maplist[i][k], end='')
        print()

    print("1. 아래으로 이동")
    print("2. 위로으로 이동")
    print("3. 오른쪽으로 이동")
    print("4. 왼쪽으로 이동")
    print("5. 게임을 종료합니다")
    
    number = int(input("숫자를 입력해주세요 : "))

    if(number == 1):
        nx=userX+1
        ny=userY
        if(nx > -1 and nx < Mapsize):
            if Maplist[nx][ny] == '💠':
                print("Success!")
                break
            elif Maplist[nx][ny] == '🔺':
                print("Boooooomb!!!")
                break
            elif Maplist[nx][ny] == '⬜':
                Maplist[nx][ny] = '🔳'
                Maplist[userX][userY] = '⬜'
                userX=nx
                userY=ny
        else:
            print("\n범위를 벗어났습니다\n")
            
    if(number == 2):
        nx=userX-1
        ny=userY
        if(nx > -1 and nx < Mapsize):
            if Maplist[nx][ny] == '💠':
                print("Success!")
                break
            elif Maplist[nx][ny] == '🔺':
                print("Boooooomb!!!")
                break
            elif Maplist[nx][ny] == '⬜':
                Maplist[nx][ny] = '🔳'
                Maplist[userX][userY] = '⬜'
                userX=nx
                userY=ny
        else:
            print("\n범위를 벗어났습니다\n")
    if(number == 3):
        nx=userX
        ny=userY+1
        if(ny > -1 and ny < Mapsize):
            if Maplist[nx][ny] == '💠':
                print("Success!")
                break
            elif Maplist[nx][ny] == '🔺':
                print("Boooooomb!!!")
                break
            elif Maplist[nx][ny] == '⬜':
                Maplist[nx][ny] = '🔳'
                Maplist[userX][userY] = '⬜'
                userX=nx
                userY=ny
        else:
            print("\n범위를 벗어났습니다\n")
    if(number == 4):
        nx=userX
        ny=userY-1
        if(ny > -1 and ny < Mapsize):
            if Maplist[nx][ny] == '💠':
                print("Success!")
                break
            elif Maplist[nx][ny] == '🔺':
                print("Boooooomb!!!")
                break
            elif Maplist[nx][ny] == '⬜':
                Maplist[nx][ny] = '🔳'
                Maplist[userX][userY] = '⬜'
                userX=nx
                userY=ny
        else:
            print("\n범위를 벗어났습니다\n")
    if(number == 5):
        print('\nGame over\n')
        break
