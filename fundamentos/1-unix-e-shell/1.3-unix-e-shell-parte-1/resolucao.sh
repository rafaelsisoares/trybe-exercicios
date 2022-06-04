#!/bin/bash

# Exercício 1
mkdir unix_tests
cd unix_tests
sleep 3

# Exercício 2
touch trybe.txt
sleep 3

# Exercício 3
cp trybe.txt trybe_backup.txt
sleep 3

# Exercício 4
mv trybe.txt webdev.txt
sleep 3

# Exercício 5
mkdir backup
sleep 3

# Exercício 6
mv trybe_backup.txt backup/
sleep 3

# Exercício 7
mkdir backup2
sleep 3

# Exercício 8
mv backup/trybe_backup.txt backup2/
sleep 3

# Exercício 9
rm -rf backup
sleep 3

# Exercício 10
mv backup2 backup
sleep 3

# Exercício 11
pwd
ls -a
sleep 3

# Exercício 12
rm -rf backup
sleep 3

# Exercício 13
clear
sleep 3

#Criação do arquivo skills.txt:
echo "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
sleep 3

# Exercício 14
head -5 skills.txt
sleep 3

# Exercício 15
tail -4 skills.txt
sleep 3

# Exercício 16
rm *.txt
