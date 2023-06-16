import pandas as pd


data = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

# Dados IPEA(2015)

df = pd.DataFrame(data)


print(f"Numero de linhas: {df.shape[0]}, numero de colunas: {df.shape[1]}")
print('Não há valores nulos\n')
print(df.info())
print('Numero medio de pessoas em situacao de rua no Brasil')
print(df['População em situação de rua'].describe()['mean'])
print(df.describe())
