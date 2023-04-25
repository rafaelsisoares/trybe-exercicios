INK_VOLUME = 18
INK_PRICE = 80
INK_PAINT_PER_LITER = 3


def total_ink_spend(wall_area: int):
    total_ink_cans = 0
    total_ink_liters = wall_area / INK_PAINT_PER_LITER
    total_ink_cans = total_ink_liters // INK_VOLUME
    if total_ink_liters % 18:
        total_ink_cans += 1
    return total_ink_cans, total_ink_cans * INK_PRICE


print('Preco total para pintar uma parede de 30m²', total_ink_spend(30))
