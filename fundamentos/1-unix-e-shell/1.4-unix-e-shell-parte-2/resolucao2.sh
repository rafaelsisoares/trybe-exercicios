#!/bin/bash

#Exercicio 1
cd unix_tests
sleep 3

#Exercicio 2
ls -l
sleep 3

#Exercicio 3
chmod a+w bunch_of_things.txt
ls -l bunch_of_things.txt
sleep 3

#Exercicio 4
chmod a-w bunch_of_things.txt
ls -l bunch_of_things.txt
sleep 3

#Exercicio 5
chmod 644 bunch_of_things.txt
ls -l bunch_of_things.txt