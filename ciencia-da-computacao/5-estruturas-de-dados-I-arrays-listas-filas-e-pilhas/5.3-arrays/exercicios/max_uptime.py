server_http = [0, 1, 1, 1, 0, 0, 1, 1]
server_email = [1, 1, 1, 1, 0, 0, 1, 1]


def uptime(array):
    max_uptime = 0
    actual_uptime = 0
    for value in array:
        if value == 1:
            actual_uptime += 1
        else:
            actual_uptime = 0
        if actual_uptime >= max_uptime:
            max_uptime = actual_uptime
    return max_uptime

# Complexidade O(n)
