import pytest
from codigo import is_odd, divide


def test_is_odd_true():
    'Testa se a função retorna True caso o número seja ímpar'
    assert is_odd(3) is True


def test_is_odd_false():
    'Testa se a função retorna False caso o número seja par'
    assert is_odd(2) is False


def test_divide_error_divide_by_zero():
    'Testa se a função retorna erro se o divisor for zero'
    with pytest.raises(ZeroDivisionError, match='division by zero'):
        divide(5, 0)
