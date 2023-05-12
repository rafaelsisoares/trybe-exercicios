import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
headers = {
    'accept': 'text/html',
    'user-agent': 'mozilla'
}

response = requests.get(url, headers=headers)
assert "bot detected" not in response.text
