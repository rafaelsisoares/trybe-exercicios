def evens(n: int) -> int:
    control = 1
    count = 0
    while control <= n:
        if control % 2 == 0 and n != 0:
            count += 1
        control += 1

    return count


def evens_recursive(n: int) -> int:
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + evens_recursive(n - 1)
    else:
        return evens_recursive(n - 1)
