from codigo import is_odd


def test_is_odd_true():
    'Testa se a função retorna True caso o número seja ímpar'
    assert is_odd(3) is True


def test_is_odd_false():
    'Testa se a função retorna False caso o número seja par'
    assert is_odd(2) is False
