from collections import Counter


class Statistcs:
    def __init__(self, numbers):
        self.__numbers = numbers

    def media(self):
        total = 0
        for number in self.__numbers:
            total += number
        
        return total / len(self.__numbers)

    def mediana(self):
        sorted(self.__numbers)

    def moda(self):
        moda = Counter(self.__numbers).most_common()
        return moda[0][0]