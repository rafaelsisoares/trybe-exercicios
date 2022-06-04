#!/bin/bash

#Exercicio 1
mkdir unix_tests
cd unix_tests
sleep 3

#Exercicio 2
echo "Internet\nUnix\nBash" > skills2.txt
sleep 3

#Exercicio 3
echo "HTML\nCSS\nJavaScript\nReact\nSQL" >> skills2.txt
sort skills2.txt
sleep 3

#Exercicio 4
wc -l skills2.txt
sleep 3

#Exercicio 5
sort skills2.txt | head -3 | cat > top_skills.txt
sleep 3

#Exercicio 6
echo "Soft Skills\nAprender a aprender\nAutocontrole é importante\nDisciplina para aprender com os erros" > phrases2.txt
sleep 3

#Exercicio 7
grep -i br phrases2.txt | wc -l
sleep 3

#Exercicio 8
grep -iv br phrases2.txt | wc -l
sleep 3

#Exercicio 9
echo "Brasil\nUcrania" >> phrases2.txt
sleep 3

#Exercicio 10
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep 3

#Exercicio 11
sort -o bunch_of_things.txt bunch_of_things.txt
