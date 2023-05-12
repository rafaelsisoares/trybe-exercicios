import requests
from parsel import Selector

url = 'https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags'


def get_flags(url):
    response = requests.get(url)
    selector = Selector(response.text)
    flags = selector.css('a.image img::attr(src)').getall()
    print(flags)


get_flags(url)