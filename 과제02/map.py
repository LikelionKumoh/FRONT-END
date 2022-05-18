import random

mapSize = int(input("맵의 크기를 입력하세요: "))
bombNum = int(input("폭탄 갯수를 입력하세요: "))

UserPos = [0, 0]
oldPos = [0,0]
targetIndex = []
bombIndex = []
map = [["⬜ " for _ in range(mapSize)] for _ in range(mapSize)]

def init():
  for i in range(bombNum):
    while True:
      bombIndex = []
      for j in range(2):
        bombIndex.append(random.randint(0, mapSize-1))
      if (map[bombIndex[0]][bombIndex[1]] != "🔺 ") and (map[bombIndex[0]][bombIndex[1]] != "🔳 "):
        map[bombIndex[0]][bombIndex[1]] = "🔺 "
        break
    
  while True:
    targetIndex = []
    for i in range(2):
      targetIndex.append(random.randint(0, mapSize-1))
    if (map[targetIndex[0]][targetIndex[1]] != "🔺 ") and (map[targetIndex[0]][targetIndex[1]] != "🔳 "):
      map[targetIndex[0]][targetIndex[1]] = "💠 "
      break

print("=============게임을 시작합니다.=============")
def print_map():
  #map = [["⬜ " for _ in range(mapSize)] for _ in range(mapSize)]
  map[oldPos[0]][oldPos[1]] = "⬜ "
  map[UserPos[0]][UserPos[1]] = "🔳 "
  #⬜🔳💠🔺
  for i in map:
    for j in i:
      print(j, end='')
    print()

def choice():
  global UserPos
  global targetIndex
  global bombIndex
  global oldPos
  num=0
  while(num != 5):
    print("1. 왼쪽으로 이동")
    print("2. 위쪽으로 이동")
    print("3. 오른쪽으로 이동")
    print("4. 아래쪽으로 이동")
    print("5. 게임 종료")
    num = int(input("원하는 숫자를 입력해 주세요: "))
    oldPos = UserPos.copy()

    if(num==1):
      UserPos[1] -= 1
    elif(num==2):  
      UserPos[0] -= 1
    elif(num==3):  
      UserPos[1] += 1
    elif(num==4):  
      UserPos[0] += 1

    if(UserPos[0] < 0):
      UserPos[0] = 0
    elif(UserPos[0] > mapSize-1):
      UserPos[0] = mapSize - 1
    elif(UserPos[1] > mapSize-1):
      UserPos[1] = mapSize - 1
    elif(UserPos[1] < 0):
      UserPos[1] = 0

    if(map[UserPos[0]][UserPos[1]] == "🔺 "):
      print("bomb")
      break
    if(map[UserPos[0]][UserPos[1]] == "💠 "):
      print("target")
      break
    print_map()

init()
print_map()
choice()