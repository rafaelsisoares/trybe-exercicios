from collections.abc import Iterable, Iterator
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, strategy):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._strategy = strategy

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self._strategy)

    def __str__(self):
        return f"{[card for card in self._cartas]}"


class IterationStrategy(ABC):
    _index = 0

    @abstractmethod
    def next_card(cls, index):
        raise NotImplementedError


class InOrderStrategy(IterationStrategy):
    _index = 0

    @classmethod
    def next_card(cls, index):
        return index + 1


class ReverseStrategy(IterationStrategy):
    _index = -1

    @classmethod
    def next_card(cls, index):
        return index - 1


class BaralhoIterator(Iterator):
    def __init__(self, cartas, strategy):
        self._cartas = cartas
        self._strategy = strategy
        self._index = self._strategy._index

    def __next__(self):
        try:
            current_value = self._cartas[self._index]
        except IndexError:
            raise StopIteration()
        else:
            self._index = self._strategy.next_card(self._index)
            return current_value


deck_reversed = Baralho(ReverseStrategy())
for card in deck_reversed:
    print(card)