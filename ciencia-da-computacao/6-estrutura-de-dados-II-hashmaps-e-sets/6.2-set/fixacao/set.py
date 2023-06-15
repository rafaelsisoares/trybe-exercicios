class Conjunto:
    def __init__(self):
        self.data = [False] * 1001
        self.last_element = 0

    def __str__(self):
        string = '{'
        for index, is_in in enumerate(self._data):
            if is_in:
                string += str(index)
                if index < self.last_element:
                    string += ', '
        string += '}'
        return string

    def __contains__(self, item):
        return self.data[item]

    def add(self, item):
        if not self.data[item]:
            self.data[item] = True
        if item > self.last_element:
            self.last_element = item

    def union(self, conjunto_b):
        conjunto_union = Conjunto()
        for index in range(1001):
            if self.data[index] or conjunto_b.data[index]:
                conjunto_union.add(index)
        return conjunto_union

    def intersection(self, conjunto_b):
        conjunto_intersection = Conjunto()
        for index in range(1001):
            if self.data[index] and conjunto_b.data[index]:
                conjunto_intersection.add(index)
        return conjunto_intersection


if __name__ == '__main__':
    values = [0, 10, 100, 1000]
    conjunto = Conjunto()
    for value in values:
        conjunto.add(value)

    print(100 in conjunto)