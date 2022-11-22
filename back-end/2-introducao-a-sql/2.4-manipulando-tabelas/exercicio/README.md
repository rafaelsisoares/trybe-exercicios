# Exercícios de manipulação de tabelas

Exercícios para prática de manipulação de tabelas SQL usando o db pixar

## Exercícios:

1. Insira as produções da Pixar na tabela movies:

* Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
* Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
* Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
* WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

2. O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.

3. O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.

4. O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.

5. Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:

* Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
* Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
* WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

6. Exclua da tabela movies o filme “WALL-E”.

7. Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.

<hr />

## Exercícios bônus:

8. Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

9. Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

10. Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.

<hr />

##### As respostas estão no arquivo resolution.sql