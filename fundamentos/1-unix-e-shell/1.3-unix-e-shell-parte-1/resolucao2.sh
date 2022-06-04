#!/bin/bash


# Exercicio 1
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep 3

# Exercicio 2
cat countries.txt
sleep 3

# Exercicio 3
less countries.txt
##Para navegar entre as páginas pressione barra de espaço, pressione p para voltar a página inicial
sleep 3

# Exercicio 4
less countries.txt
##Use o / para pesquisar dentro do arquivo. Ex. /Zambia
sleep 3

# Exercicio 5
grep Brazil countries.txt
sleep 3

# Exercicio 6
grep -i brazil countries.txt
sleep 3

# Exercicio 7 e Criação do arquivo phrases.txt
echo "Quero aprender a programar\nSer desenvolvedor\n Comprar um fox\nColaborar em projetos\nBuscar o sucesso" > phrases.txt
grep -v fox phrases.txt
sleep 3

# Exercicio 8
wc -w phrases.txt
sleep 3

# Exercicio 9
wc -l phrases.txt
sleep 3

# Exercicio 10
touch empty.tbt empty.pdf
sleep 3

# Exercicio 11
ls -a
sleep 3

# Exercicio 12
ls -a *.txt
sleep 3

# Exercicio 13
ls -a *.{tbt,txt}
sleep 3

# Exercicio 14
man ls
