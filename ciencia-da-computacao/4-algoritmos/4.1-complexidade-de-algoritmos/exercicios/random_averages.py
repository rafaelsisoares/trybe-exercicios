from random import randint
from typing import List


def generate_averages(n: int) -> List[int]:
    averages = []
    for _ in range(100):
        average = 0
        for _ in range(n):
            average += randint(1, n)
        average = average / n
        averages.append(average)

    return averages
