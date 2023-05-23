def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False

# Para o melhor caso, os números duplicados devem aparecer nas duas primeiras posições da lista
# a ordem de complexidade é O(n log n)

# Para o pior caso, os números duplicados devem aparecer nas duas últimas posições da lista
# a ordem de complexidade é O(n)

# Para o caso médio, os números duplicados devem aparecer no meio da lista
# a ordem de complexidade é O(n log n)
