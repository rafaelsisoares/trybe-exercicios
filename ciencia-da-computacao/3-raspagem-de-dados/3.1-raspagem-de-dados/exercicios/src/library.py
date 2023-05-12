from pymongo import MongoClient


def connect(category):
    with MongoClient() as client:
        db = client.library
        for book in db.books.find({'category': category}):
            print(book['title'])
    

print('Escolha uma categoria:')
category = input()
connect(category)
