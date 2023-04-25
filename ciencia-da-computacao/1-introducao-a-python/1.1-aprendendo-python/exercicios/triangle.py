def triangle(l1, l2, l3):
    is_triangle = (
        l1 + l2 > l3 and
        l1 + l3 > l2 and
        l2 + l3 > l1
    )

    if not is_triangle:
        return "não é um triangulo"
    elif l1 == l2 == l3:
        return "Triangulo equilátero"
    elif l1 == l2 or l1 == l3 or l2 == l3:
        return "Triangulo isósceles"
    else:
        return "Triangulo escaleno"


print(triangle(5, 5, 5))
