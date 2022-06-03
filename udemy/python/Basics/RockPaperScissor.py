import random

choices = ["rock", "paper", "scissor"]
computer = random.randint(0, 2)

player = int(input("What do yiy choose? Type 0 for Rock, 1 for Paper, or 2 for Scissors: \n"))

print(f"\n{choices[player]} vs {choices[computer]}\n")

if((player == computer)):
    print("Draw")
elif((player == 1 and computer == 0)or(player == 0 and computer == 2) or(player == 2 and computer == 1)):
    print("Win")
elif((player == 2 and computer == 0)or(player == 1 and computer == 2) or(player == 0 and computer == 1)):
    print("Lose")
