from abc import ABC, abstractmethod


class CalculateTaxes(ABC):
    @abstractmethod
    def calculate_tax(cls):
        raise NotImplementedError


class CalculateIss(CalculateTaxes):
    @classmethod
    def calculate_tax(cls, value):
        return value * 0.1


class CalculateIcms(CalculateTaxes):
    @classmethod
    def calculate_tax(cls, value):
        return value * 0.06


class CalculatePis(CalculateTaxes):
    @classmethod
    def calculate_tax(cls, value):
        return value * 0.0065


class CalculateCofins(CalculateTaxes):
    @classmethod
    def calculate_tax(cls, value):
        return value * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calculate_tax(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(CalculateIss())}")
print(f"ICMS: {orcamento.calcular_imposto(CalculateIcms())}")
print(f"PIS: {orcamento.calcular_imposto(CalculatePis())}")
print(f"COFINS: {orcamento.calcular_imposto(CalculateCofins())}")
