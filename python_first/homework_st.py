import random
# python game

map = []

px = 0
py = 0


def makemap(map_size, bomb_count):
    global px, py
    for i in range(map_size):
        sub_list = []
        for j in range(map_size):
            sub_list.append("🔳")
        map.append(sub_list)

    map[0][0] = "⬜"
    while True:
        px = random.randint(0, map_size-1)
        py = random.randint(0, map_size-1)
        if(px != 0 or py != 0):
            map[px][py] = "💠"
            break

    count = 0
    while True:
        bx = random.randint(0, map_size-1)
        by = random.randint(0, map_size-1)
        if(((bx != 0) or (by != 0)) and ((bx != px) or (by != py)) and (map[bx][by] != "🔺")):
            if(count == bomb_count):
                break
            count += 1
            map[bx][by] = "🔺"

    for i in range(map_size):
        for j in range(map_size):
            print(map[i][j], end=' ')
        print()


UserX = 0
UserY = 0
nx = 0
ny = 0


def move_user():
    global UserX, UserY, temp, nx, ny
    print("1. 아래로 이동")
    print("2. 위로 이동")
    print("3. 오른쪽으로 이동")
    print("4. 왼쪽으로 이동")
    print("5. 게임종료")
    temp = int(input("입력 : "))

    if(temp == 1):
        nx = UserX + 1
        ny = UserY
        if(nx == map_size):
            map[0][0] = "⬜"
            map[UserX][UserY] = "🔳"
            UserX = 0
            UserY = 0
            return True
        if(map[nx][ny] == "🔺"):
            return False
        map[nx][ny] = "⬜"
        map[UserX][UserY] = "🔳"
        UserX = nx
        UserY = ny
        if(map[nx][ny] == "💠"):
            return False
        return True
    elif(temp == 2):
        nx = UserX - 1
        ny = UserY
        if(nx == -1):
            map[UserX][UserY] = "🔳"
            map[0][0] = "⬜"
            UserX = 0
            UserY = 0
            return True
        if(map[nx][ny] == "🔺"):
            return False
        if(nx < 0 or ny < 0 or nx > map_size-1 or ny > map_size - 1):
            map[0][0] = "⬜"
            map[UserX][UserY] = "🔳"
            UserX = 0
            UserY = 0
        map[nx][ny] = "⬜"
        map[UserX][UserY] = "🔳"
        UserX = nx
        UserY = ny
        if(map[nx][ny] == "💠"):
            return False
        return True
    elif(temp == 3):
        nx = UserX
        ny = UserY + 1
        if(ny == map_size):
            map[0][0] = "⬜"
            map[UserX][UserY] = "🔳"
            UserX = 0
            UserY = 0
            return True
        if(map[nx][ny] == "🔺"):
            return False
        if(nx < 0 or ny < 0 or nx > map_size-1 or ny > map_size - 1):
            map[0][0] = "⬜"
            map[UserX][UserY] = "🔳"
            UserX = 0
            UserY = 0
        map[nx][ny] = "⬜"
        map[UserX][UserY] = "🔳"
        UserX = nx
        UserY = ny
        if(map[nx][ny] == "💠"):
            return False
        return True
    elif(temp == 4):
        nx = UserX
        ny = UserY - 1
        if(ny == -1):
            map[UserX][UserY] = "🔳"
            map[0][0] = "⬜"
            UserX = 0
            UserY = 0
            return True
        if(map[nx][ny] == "🔺"):
            return False
        if(nx < 0 or ny < 0 or nx > map_size-1 or ny > map_size - 1):
            map[0][0] = "⬜"
            map[UserX][UserY] = "🔳"
            UserX = 0
            UserY = 0
        map[nx][ny] = "⬜"
        map[UserX][UserY] = "🔳"
        UserX = nx
        UserY = ny
        if(map[nx][ny] == "💠"):
            return False
        return True
    else:
        return False


map_size = int(input("맵의 크기는 ? "))
bomb_count = int(input("폭탄의 개수는? "))

makemap(map_size, bomb_count)
while (UserX != px or UserY != py):
    if(move_user()):
        for i in range(map_size):
            for j in range(map_size):
                print(map[i][j], end=' ')
            print()
    else:
        break

if(UserX == px and UserY == py):
    print("축하합니다! 보물을 발견했습니다 !!")
    print("게임을 종료합니다.")
if(map[nx][ny] == "🔺"):
    print("펑! 폭탄이 터졌습니다.")
    print("게임에 실패했습니다.")
if(temp == 5):
    print("사용자가 게임을 종료하였습니다.")
