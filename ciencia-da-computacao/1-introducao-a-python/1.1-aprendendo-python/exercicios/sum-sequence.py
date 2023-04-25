def sum_sequence(num: int) -> int:
    start = 1
    result = 0

    while start <= num:
        result += start
        start += 1

    return result


print(sum_sequence(5))
