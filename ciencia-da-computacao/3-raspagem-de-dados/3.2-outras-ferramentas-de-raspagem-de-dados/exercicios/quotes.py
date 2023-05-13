from selenium import webdriver
from selenium.webdriver.common.by import By

url = 'https://quotes.toscrape.com/'


def get_first_quote(url):
    browser = webdriver.Firefox()
    browser.get(url)
    quote = browser.find_element(By.CLASS_NAME, 'text').get_attribute(
        'innerHTML'
    )
    return quote


print(get_first_quote(url=url))
