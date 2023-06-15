def calculate_start(choices, guesses):
    return max(choices.difference(guesses))


def calculate_reductor(choices, guesses):
    return min(choices.difference(guesses))


def calculate_points(choices, guesses):
    set_choices = set(choices)
    set_guesses = set(guesses)

    return calculate_start(set_choices, set_guesses) - calculate_reductor(
        set_choices, set_guesses
        )


def blefe(input):
    players = list(input.keys())

    player1 = calculate_points(input[players[0]], input[players[1]])
    player2 = calculate_points(input[players[1]], input[players[0]])

    if player1 > player2:
        return players[0]
    elif player2 > player1:
        return players[1]
    else:
        return None


if __name__ == '__main__':
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10]
    }

    winner = blefe(entrada)
    if winner:
        print(f"Quem venceu: {winner}")
    else:
        print('Empate')
