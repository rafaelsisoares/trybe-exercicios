import pandas as pd
from collections import Counter


def create_data_frame(path):
    data = pd.read_csv(path)
    df = pd.DataFrame(data)
    return df


if __name__ == "__main__":
    df = create_data_frame("data/fifa_audience.csv")
    print(df)
    print(df["country"].loc[df["population_share"] > 2])
    confederations = df["confederation"]
    counter = Counter(list(confederations)).most_common()
    df_confederations = pd.DataFrame(counter, columns=["confederation", "members"])
    print(df_confederations)
    print(df['country'].loc[df["confederation"] == 'CONMEBOL'])
