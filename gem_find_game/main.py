import random


EMPTY_BLOCK = "⬜"
FULL_BLOCK = "🔳"
GEM = "💠"
BOMB = "🔺"

x = 0
y = 0


def create_map(map_size, bomb_count):
    if map_size ** 2 - 2 < bomb_count:
        print("폭탄이 너무 많다.")
        return None

    result_map = []
    for i in range(map_size):
        row = [EMPTY_BLOCK for _ in range(map_size)]
        result_map.append(row)
    result_map[0][0] = FULL_BLOCK

    while True:
        x = random.randrange(0, map_size - 1)
        y = random.randrange(0, map_size - 1)

        if x !=0 or y != 0:
            result_map[x][y] = GEM
            break

    count = 0
    while True:
        x = random.randrange(0, map_size - 1)
        y = random.randrange(0, map_size - 1)

        if result_map[x][y] == EMPTY_BLOCK:
            result_map[x][y] = BOMB
            count = count + 1

        if count == bomb_count: break

    return result_map


def print_map(map):
    for i in range(len(map)):
        for j in range(len(map)):
            print(map[i][j], end="")
        print()

# 벽을 만나는 경우 x가 0보다 작거나 맵사이즈보다 크거나 => 못움직이고 다시 입력
# 폭탄을 만나는 경우 => 종료
# 보석을 만나는 경우 => 종료
# 잘못된 입력 => 다시 입력
def move(num):
    global map, x, y
    nx = x
    ny = y
    map_size = len(map)

    def is_out_of_range(a):
        return a < 0 or map_size-1 < a

    if num == 1:
        nx = nx + 1
    elif num == 2:
        nx = nx - 1
    elif num == 3:
        ny = ny + 1
    elif num == 4:
        ny = ny - 1
    elif num == 5:
        return False
    else:
        print("잘못된 입력입니다.")
        return True

    if is_out_of_range(nx) or is_out_of_range(ny):
        print("벽이다")
        return True
    elif map[nx][ny] == GEM:
            print("보석을 찾았다!")
            return False
    elif map[nx][ny] == BOMB:
            print("폭탄을 밟았다!")
            return False
    else:
        map[nx][ny] = FULL_BLOCK
        map[x][y] = EMPTY_BLOCK
        x = nx
        y = ny

    if num == 1:
        print("아래로 이동")
    elif num == 2:
        print("위로 이동")
    elif num == 3:
        print("오른쪽으로 이동")
    else :
        print("왼쪽으로 이동")

    return True


def print_menu():
    print("1.아래로 이동")
    print("2.위로 이동")
    print("3.오른쪽 이동")
    print("4.왼쪽 이동")
    print("5.게임 종료")


map_size = int(input("맵 크기를 입력해주세요 : "))
bomb_count = int(input("폭탄 개수를 정해 주세요 : "))
map = create_map(map_size, bomb_count)

if map:
    while True:
        print_map(map)
        print_menu()
        num = int(input("원하는 숫자를 입력하여 주세요 : "))
        if not move(num):
            print("게임을 종료합니다")
            break
