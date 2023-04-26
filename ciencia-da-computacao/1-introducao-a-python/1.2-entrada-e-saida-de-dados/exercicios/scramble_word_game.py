import random

with open('words.txt', mode='r') as file:
    words = [line.strip("\n") for line in file]


word = random.choice(words)

scramble_word = ''.join(random.sample(word, len(word)))

chances = 3

while chances > 0:
    print(scramble_word)
    input_word = input('Qual é essa palavra? ')
    if input_word == word:
        print('Parabéns, você acertou!')
        break
    else:
        print('Ahhhh você errou, tente novamente.')
        chances -= 1

print(f"A palavra é: {word}")
