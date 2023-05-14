from selenium import webdriver
from selenium.webdriver.common.by import By

url = 'https://diolinux.com.br/'


def get_all_titles():
    browser = webdriver.Firefox()
    browser.get(url)
    print('Coletando dados...')
    all_titles = []
    for title in browser.find_elements(By.CLASS_NAME, 'post-title'):
        all_titles.append({
            'title': title.get_attribute('innerText'),
            'link': title.find_element(By.TAG_NAME, 'a').get_attribute('href')
        })

    return all_titles


print(get_all_titles())
