import random

size = int(input("맵의 크기를 입력하여 주세요 : "))
bombcnt = int(input("폭탄의 개수를 정해 주세요 : "))

x = 0
y = 0
ux = 0
uy = 0
bx = 0
by = 0

BACK = "⬜"
POINT = "🔳"

map =[]
def createMap(size,bombcnt):
    #맵만들기
    global x, y
    for _  in range(size):
        sublist = [BACK for _ in range(size)]
        map.append(sublist)
    map[0][0] = POINT

    #다이아 넣기
    while True :
        x = random.randint(0,size-1)
        y = random.randint(0,size-1)
        if x !=0 or y != 0:
            map[x][y] = "💠"
            break

    # 폭탄넣기
    cnt = 0
    while True:
        bx = random.randint(0, size - 1)
        by = random.randint(0, size - 1)
        if (map[bx][by] == BACK):
            map[bx][by] = "🔺"
            cnt += 1
        if(cnt == bombcnt): break
        

def printmap(map):
    for i in range(size):
        for j in range(size):
            print(map[i][j], end="")
        print()
#메뉴
def menu():
    print("1. 아래로 이동")
    print("2. 위로 이동")
    print("3. 오른쪽 이동")
    print("4. 왼쪽 이동")
    print("5. 게임 종료")

def move(num):
    global ux ,uy

    if(num == 1 and (ux + 1  < size)):
            map[ux][uy] = BACK
            map[ux+1][uy] = POINT
            ux = ux + 1
            print("아래쪽으로 이동합니다.")

    elif(num == 2 and (ux - 1 >= 0)):
            map[ux][uy] = BACK
            map[ux-1][uy] = POINT
            ux = ux - 1
            print("위쪽으로 이동합니다.")

    elif(num == 3 and (uy + 1 < size)):
            map[ux][uy] = BACK
            map[ux][uy + 1] = POINT
            uy = uy + 1
            print("오른쪽으로 이동합니다.")

    elif(num == 4 and (uy - 1 >= 0)):
            map[ux][uy] = BACK
            map[ux][uy -1] = POINT
            uy = uy - 1
            print("왼쪽으로 이동합니다.")

    elif num == 5:
        print("게임을 종료합니다. ")
        exit(0)

print("============게임을 시작합니다.=============")

createMap(size, bombcnt)

while True :
    printmap(map)
    menu()
    num = int(input("번호를 선택하세요:"))
    move(num)
    if(ux == x and uy == y):
        print("보석을 찾았습니다. 게임 종료")
        exit(0)
    
    if(ux == bx and uy == by):
        print("폭탄을 밟았습니다. 게임 종료")
        exit(0)