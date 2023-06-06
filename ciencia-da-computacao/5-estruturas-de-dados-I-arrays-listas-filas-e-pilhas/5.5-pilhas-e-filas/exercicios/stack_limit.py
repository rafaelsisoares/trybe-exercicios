from stack import Stack


class StackOverflow(Exception):
    pass


class StackLimit(Stack):
    def __init__(self, limit):
        self.__limit = limit

    def push(self, value):
        if len(self._data) > self.__limit:
            raise StackOverflow
        super().push(value)
