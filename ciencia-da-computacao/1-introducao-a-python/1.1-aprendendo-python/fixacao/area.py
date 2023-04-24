PI = 3.14


def square (side):
    '''Calculate area of square'''
    return side * side


def rectangle (length, width):
    '''Calculate area of rectangle'''
    return length * width


def circle (radius):
    '''Calculate area of circle'''
    return PI * radius * radius


print('Area do quadrado', square(10))
print('Area do retangulo', rectangle(2, 2))
print('Area do circulo', circle(3))