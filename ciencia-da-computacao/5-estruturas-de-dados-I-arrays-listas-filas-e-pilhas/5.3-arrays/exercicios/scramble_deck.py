def scramble_deck(deck):
    results = []
    half = len(deck) // 2
    for offset in range(half):
        results.extend(deck[offset::half])
    return results

# Complexidade O(n)
