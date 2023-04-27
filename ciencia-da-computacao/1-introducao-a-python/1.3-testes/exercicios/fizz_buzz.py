def fizz_buzz(num: int):
    i = 1
    output_list = []
    while i <= num:
        if i % 3 == 0 and i % 5 == 0:
            output_list.append('FizzBuzz')
        elif i % 5 == 0:
            output_list.append('Buzz')
        elif i % 3 == 0:
            output_list.append('Fizz')
        else:
            output_list.append(i)
        i += 1
    return output_list


print(fizz_buzz(30))
