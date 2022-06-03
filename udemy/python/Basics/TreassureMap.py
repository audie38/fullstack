row1 = ["o", "o", "o"]
row2 = ["o", "o", "o"]
row3 = ["o", "o", "o"]

map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")

position = input("Where do you want to put the treassure ?")
row = int(position[0])-1
col = int(position[1])-1

map[row][col] = "*"

print(f"{row1}\n{row2}\n{row3}")
