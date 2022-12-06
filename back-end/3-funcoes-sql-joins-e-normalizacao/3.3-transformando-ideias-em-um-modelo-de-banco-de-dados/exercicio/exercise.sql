/*
Exercício 1: Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

Nome;

Espécie;

Sexo;

Idade;

Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
*/

DROP SCHEMA IF EXISTS zoologico;

CREATE DATABASE zoologico;

USE zoologico;

CREATE TABLE especies (
	idespecies INT PRIMARY KEY AUTO_INCREMENT,
    especie VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE localizacao (
	idlocalizacao INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE gerentes (
	idgerente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL
);


CREATE TABLE animais (
	idanimais INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT(3),
    idespecies INT NOT NULL,
    idlocalizacao INT NOT NULL,
    FOREIGN KEY (idespecies) REFERENCES especies(idespecies),
    FOREIGN KEY (idlocalizacao) REFERENCES localizacao(idlocalizacao)
);

CREATE TABLE cuidadores (
	idcuidador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    idgerente INT NOT NULL,
    FOREIGN KEY (idgerente) REFERENCES gerentes(idgerente)
);

CREATE TABLE animais_has_cuidadores (
	idanimais INT NOT NULL,
    idcuidador INT NOT NULL,
    CONSTRAINT PRIMARY KEY (idanimais, idcuidador),
    FOREIGN KEY (idanimais) REFERENCES animais(idanimais),
    FOREIGN KEY (idcuidador) REFERENCES cuidadores(idcuidador)
);