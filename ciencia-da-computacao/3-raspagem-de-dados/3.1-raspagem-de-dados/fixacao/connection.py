# Conexão com um banco de dados MongoDB
from pymongo import MongoClient

# Cria conexão com o database usando parametros padrões (port: 27017)
client = MongoClient()

# Cria o database catalogue se não existir
db = client.catalogue

# Cria a colecao books se não existir
students = db.books

# Adiciona um dado da raspagem no database
book = {
    "title": "A Light in the Attic",
}

document_id = db.books.insert_one(book).inserted_id
print(document_id)

# Adiciona varios dados da raspagem no database
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]

db.books.insert_many(documents=documents)

print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
# Fecha a conexão
client.close()
