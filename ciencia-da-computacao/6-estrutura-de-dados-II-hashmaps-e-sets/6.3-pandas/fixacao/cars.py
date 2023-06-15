import pandas as pd

cars = {
    'modelo': ['Corolla', 'Civic', 'Jetta', 'Prisma'],
    'power': [110, 115, 108, 100],
    'consumption': [11.3, 10.6, 11, 9.8]
}

df = pd.DataFrame(cars)
print(df)
