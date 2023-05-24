def evens(n: int) -> int:
    control = 1
    count = 0
    while control <= n:
        if control % 2 == 0:
            count += 1
        control += 1

    return count
