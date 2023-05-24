def countdown(n):
    # caso base
    if n == 0:
        print('FIM')
    else:  # caso recursivo
        print(n)
        countdown(n - 1)  # chamada recursiva


countdown(5)
