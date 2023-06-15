class Conjunto:
    def __init__(self):
        self.data = [False] * 1001
        self.last_element = 0

    def __str__(self):
        string = '{'
        for index, is_in in enumerate(self.data):
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

    def difference(self, conjunto_b):
        conjunto_difference = Conjunto()
        for index in range(1001):
            if self.data[index] and not conjunto_b.data[index]:
                conjunto_difference.add(index)
        return conjunto_difference

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.data[index] and not conjunto_b.data[index]:
                return False
        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.data[index] and not self.data[index]:
                return False
            return True


if __name__ == '__main__':
    values = [0, 10, 100, 1000]
    conjunto = Conjunto()
    for value in values:
        conjunto.add(value)

    print(100 in conjunto)

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    students = Conjunto()
    project1 = Conjunto()
    project2 = Conjunto()
    for estudante in estudantes:
        students.add(estudante)
    for student in lista1_entregues:
        project1.add(student)
    for student in lista2_entregues:
        project2.add(student)

    print(f"""Estudantes que não entregaram o primeiro projeto:
            {students.difference(project1)}""")
    print(f"""Estudantes que entregaram os dois projetos:
            {project1.intersection(project2)}""")
    print(f"""Estudantes que entregaram os dois projetos:
            {project1.intersection(project2)}""")
    print(f"""Estudantes que entregaram pelo menos um projeto:
            {project1.union(project2)}""")
    print(f"""Estudantes que não entregaram nenhum projeto:
            {students.difference(project1.union(project2))}""")
