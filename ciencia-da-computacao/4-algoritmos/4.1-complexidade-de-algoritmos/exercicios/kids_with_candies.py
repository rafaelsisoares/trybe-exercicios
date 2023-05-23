def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

# Para definir o valor de max_candies, o método max() percorre toda a lista,
# sendo assim sua complexidade de tempo é O(n)
# No retorno da função, a lista é percorrida novamente
# sendo assim sua complexidade de tempo é O(n)
# A complexidade de espaço tambem é O(n) porque conforme o número de crianças
# aumenta, a lista de doces aumenta propocionalmente.
