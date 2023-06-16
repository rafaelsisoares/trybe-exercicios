import pandas as pd


def create_data_frame(path):
    data = pd.read_csv(path)
    df = pd.DataFrame(data)
    return df


if __name__ == '__main__':
    df = create_data_frame('data/fifa_audience.csv')
    print(df)
    print(df['country'].loc[df['population_share'] > 2])
