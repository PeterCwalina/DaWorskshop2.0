import math
password1 = "myPAss8324728239r%^%$#"

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "1234567890"
SYMBOLS = "!@#$%^&*()-_=+[{}]|\\/?.><,;:\'\""

def ratePass(password):
    #gives each thing a rating then sums it
    rating = [1 if x in UC_LETTERS else 2 if x in NUMBERS else 3 if x in SYMBOLS else 0 for x in password]
    #the score given is the rating/5
    score = sum(rating) / 5
    #max score is 10 so anything above it will just be a 10
    if (score > 10):
        score = 10

    return math.floor(score)

print(ratePass(password1))
