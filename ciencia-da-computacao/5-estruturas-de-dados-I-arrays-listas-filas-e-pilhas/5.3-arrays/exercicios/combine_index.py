def combine_index(array):
    results = []
    for i in range(len(array) - 1):
        for j in range(i + 1, len(array)):
            if array[i] == array[j]:
                results.append((i, j))
    return results

# Complexidade O(n²)
