import requests
from bs4 import BeautifulSoup

url = 'https://pt.wikipedia.org/wiki/Rock_in_Rio%22'


def get_html(url):
    response = requests.get(url)
    return response.text


def get_all_links():
    html = get_html(url)
    bs = BeautifulSoup(html, 'html.parser')
    links = bs.find_all('a')
    for link in links:
        return link['href']


print(get_all_links())
