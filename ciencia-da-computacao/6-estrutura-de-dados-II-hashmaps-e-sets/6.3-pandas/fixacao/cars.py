import pandas as pd

cars = {
    'modelo': ['Corolla', 'Civic', 'Jetta', 'Prisma'],
    'power': [110, 115, 108, 100],
    'consumption': [11.3, 10.6, 11, 9.8]
}

df = pd.DataFrame(cars)
print(df)


model_serie = pd.Series(cars['modelo'])
power_serie = pd.Series(cars['power'])
consumption_serie = pd.Series(cars['consumption'])

print(model_serie, power_serie, consumption_serie)