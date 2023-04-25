def total_fuel_price(liters, type):
    a_price = 1.9
    g_price = 2.5
    total = 0

    if type == 'a':
        if liters <= 20:
            total = liters * (a_price * 0.96)
        else:
            total = liters * (a_price * 0.94)
    else:
        if liters <= 20:
            total = liters * (g_price * 0.97)
        else:
            total = liters * (g_price * 0.95)

    return total


print(total_fuel_price(50, 'a'))
