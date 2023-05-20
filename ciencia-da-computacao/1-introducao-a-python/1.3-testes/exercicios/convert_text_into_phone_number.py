import json


def json_reader(input_file):
    with open(input_file, mode='r') as file:
        return json.load(file)


def build_phone_number(phrase):
    char_list = [char for char in phrase]
    phone_number = ''
    for letter in char_list:
        if letter == '1' or letter == '0' or letter == '-':
            phone_number += letter
        elif letter in 'ABC':
            phone_number += '2'
        elif letter in 'DEF':
            phone_number += '3'
        elif letter in 'GHI':
            phone_number += '4'
        elif letter in 'JKL':
            phone_number += '5'
        elif letter in 'MNO':
            phone_number += '6'
        elif letter in 'PQRS':
            phone_number += '7'
        elif letter in 'TUV':
            phone_number += '8'
        elif letter in 'WXYZ':
            phone_number += '9'
        else:
            raise ValueError('Invalid character')

    return phone_number


print(build_phone_number('1-HOME-SWEET-HOME'))
