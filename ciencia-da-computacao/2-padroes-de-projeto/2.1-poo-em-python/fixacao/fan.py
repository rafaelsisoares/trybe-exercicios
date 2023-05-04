class Fan:
    def __init__(self, speed, voltage, color, price):
        self.__speed = speed
        self.__voltage = voltage
        self.__color = color
        self.__actual_speed = 0
        self.__price = price

    def __str__(self):
        return f"""
            Caracteristicas do ventilador:
            Velocidades: {self.__speed}
            Tensão: {self.__voltage}
            Cor: {self.__color}
            Velocidade atual: {self.__actual_speed}
            Preço: {self.__price}
        """

    @property
    def speed(self):
        return self.__speed

    def voltage(self):
        return self.__voltage

    def color(self):
        return self.__color

    def actual_speed(self):
        return self.__actual_speed

    def price(self):
        return self.__price


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def __str__(self):
        return f"""
            {self.nome} possui um ventilador? {self.ventilador}
        """

    def comprar_ventilador(self, ventilador):
        if ventilador.price() <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.price()
            self.ventilador = ventilador


fan = Fan(3, 127, "Branco", 350)
person = Pessoa('Ciclano', 2000)
person.comprar_ventilador(fan)
print(person)
