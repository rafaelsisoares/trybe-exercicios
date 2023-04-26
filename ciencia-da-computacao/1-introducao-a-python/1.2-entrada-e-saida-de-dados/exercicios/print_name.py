name = input('Digite seu nome:')
letters = [letter for letter in name]

while len(letters) > 0:
    print("".join(letters))
    letters.pop()
