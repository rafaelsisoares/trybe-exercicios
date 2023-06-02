def in_and_out(get_in, get_out, target):
    counter = 0
    for i in range(len(get_in)):
        if get_in[i] <= target <= get_out[i]:
            counter += 1
    return counter

# Complexidade O(n)
