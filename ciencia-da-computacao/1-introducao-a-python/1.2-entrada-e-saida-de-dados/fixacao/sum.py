nums = input("Digite dois números separados por espaço:")

num1 = nums.split(" ")[0]
num2 = nums.split(" ")[1]


if not num1.isdigit():
    print(f"Erro ao somar valores, {num1} é um valor inválido.")
elif not num2.isdigit():
    print(f"Erro ao somar valores, {num2} é um valor invalido.")
else:
    print(f"A soma de {num1} com {num2} é igual a {int(num1) + int(num2)}.")
