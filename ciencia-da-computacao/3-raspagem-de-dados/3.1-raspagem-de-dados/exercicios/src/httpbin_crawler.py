import requests


def get_content(url):
    return requests.get(url).text


print(get_content('https://httpbin.org/encoding/utf8'))
