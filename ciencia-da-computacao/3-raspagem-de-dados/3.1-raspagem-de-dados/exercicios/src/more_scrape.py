import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
headers = {
    'accept': 'text/html',
    'accept-encoding': 'gzip, deflate, br'
}

response = requests.get(url, headers=headers)
assert "bot detected" not in response.text
print(response.text)
