# Iterator e Iterable é a Interface padronizada pelo Python
from collections.abc import Iterable, Iterator
from iterator.iterator import DbSimulator


class DatabaseIterator(Iterator):
    def __init__(self, db, query):
        """No construtor da classe iteradora, definimos o valor inicial do
        contador current_page, e também o(s) atributo(s) que será(ão)
        responsável(is) por armazenar/acessar a coleção de dados pela qual
        queremos iterar."""

        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        """Este método busca no banco de dados a página que queremos e
        incrementa o contador current_page, para retornarmos a próxima página
        na próxima vez que o método for chamado."""

        data = self.get_page(page=self.current_page)

        """É uma boa prática a utilização da exceção StopIteration() para
        indicar que não foi possível avançar na iteração. Ou seja: tentamos
        acessar uma current_page que não existe."""

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data


class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query

    """Aqui retornamos qual é o objeto que realiza a iteração"""
    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterable(DbSimulator(), "select * from person")

# Em seguida podemos usar o for para iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a página, que é uma lista de resultados
    for record in page:
        print(record["name"])
