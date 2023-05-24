from typing import List


def find_max(numbers: List[int], size: int) -> int:
    if size == 1:
        return numbers[0]
    else:
        largest = find_max(numbers, size - 1)
        if largest > numbers[size - 1]:
            return largest
        else:
            return numbers[size - 1]


def max_finder(numbers: List):
    size = len(numbers)
    return find_max(numbers, size)
