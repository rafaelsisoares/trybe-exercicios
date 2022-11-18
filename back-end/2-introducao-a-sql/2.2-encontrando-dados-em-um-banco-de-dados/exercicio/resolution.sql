-- 1. 
SELECT 'This is SQL Exercise, Pratice and Solution';
-- 2.
SELECT 10, 20, 30;
-- 3.
SELECT 10 + 15;
-- 4.
SELECT 5 + 4 * 2;
-- 5.
SELECT * FROM Scientists.Scientists;
-- 6.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
-- 7.
SELECT * FROM Scientists.Scientists ORDER BY Name;
-- 8.
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
-- 9.
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído') FROM Scientists.Projects;
-- 10.
SELECT Name , Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;