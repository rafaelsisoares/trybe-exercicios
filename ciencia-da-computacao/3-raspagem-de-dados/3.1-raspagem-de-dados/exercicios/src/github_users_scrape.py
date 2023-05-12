import requests


def get_github_users(url):
    response = requests.get(url)
    return response.json()


users = get_github_users('https://api.github.com/users')
for user in users:
    print(f"{user['login']} {user['url']}")
