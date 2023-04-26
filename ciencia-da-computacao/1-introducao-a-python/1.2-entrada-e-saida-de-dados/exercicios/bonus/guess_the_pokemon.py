import json
import random


def reader_json(json_file):
    with open(json_file, mode='r') as file:
        return json.load(file)


def select_pokemon(pokemons_list):
    selected_pokemon = random.choice(pokemons_list)
    return selected_pokemon['name']


pokemons = reader_json('pokemons.json')
name = select_pokemon(pokemons['results'])
i = 0
hidden_name = ''

while i < len(name):
    hidden_name += name[i]
    print(hidden_name)
    user_attempt = input('Quem é esse pokemon? ')
    if user_attempt == name:
        print('Parabéns, você acertou!')
        break
    print('Você errou, tente novamente')
    i += 1
