print("One of my python programs")
import random
import sys

number = input("Enter the highest number for your guessing game: ")
try:
    int(number)
except TypeError:
    print("That is not a number")
    sys.exit()
number = int(number)
if number < 1:
    print("That number is too low")
    sys.exit()
guesses = number
guess_counter = 0
while guesses > 1:
    guesses = guesses / 2
    guess_counter = guess_counter + 1
answer = random.randint(1, number)
counter = 0
right = 0
guess = 0

print("Please guess a number between 1 and {}: ".format(number))

while guess != answer:
    guess = int(input())
    if guess < answer:
        print("Please guess higher.")
    elif guess > answer:
        print("Please guess lower.")
    else:
        right = 1
    counter = counter + 1
    if counter == guess_counter and right == 0:
        print("You lose.")
        sys.exit()

if ("0", str(counter))[-2] == "1":
    print("You got it right on the {}th try!".format(counter))
elif ("0", str(counter))[-1] == "1":
    print("You got it right on the {}st try!".format(counter))
elif ("0", str(counter))[-1] == "2":
    print("You got it right on the {}nd try!".format(counter))
elif ("0", str(counter))[-1] == "3":
    print("You got it right on the {}rd try!".format(counter))
else:
    print("You got it right on the {}th try!".format(counter))