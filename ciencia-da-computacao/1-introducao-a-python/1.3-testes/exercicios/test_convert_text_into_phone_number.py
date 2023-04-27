import pytest
from convert_text_into_phone_number import build_phone_number


def test_convert_abc_into_222():
    assert build_phone_number('ABC') == '222'


def test_convert_def_into_333():
    assert build_phone_number('DEF') == '333'


def test_convert_ghi_into_444():
    assert build_phone_number('GHI') == '444'


def test_convert_jkl_into_555():
    assert build_phone_number('JKL') == '555'


def test_convert_mno_into_666():
    assert build_phone_number('MNO') == '666'


def test_convert_pqrs_into_7777():
    assert build_phone_number('PQRS') == '7777'


def test_convert_tuv_into_888():
    assert build_phone_number('TUV') == '888'


def test_convert_wxyz_into_9999():
    assert build_phone_number('WXYZ') == '9999'


def test_maintain_1_0_and_dash():
    assert build_phone_number('1-0') == '1-0'


def test_invalid_characters():
    with pytest.raises(ValueError):
        build_phone_number('1-***-***')

