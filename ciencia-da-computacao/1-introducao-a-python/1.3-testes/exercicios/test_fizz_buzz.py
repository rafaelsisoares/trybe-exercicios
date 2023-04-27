from fizz_buzz import fizz_buzz


def test_number():
    assert fizz_buzz(2) == [1, 2]


def test_fizz():
    assert fizz_buzz(3)[-1] == 'Fizz'


def test_buzz():
    assert fizz_buzz(5)[-1] == 'Buzz'


def test_fizzbuzz():
    assert fizz_buzz(15)[-1] == 'FizzBuzz'
