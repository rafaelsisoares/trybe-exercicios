-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS average_salary FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    MAX(salary) AS biggest_salary,
    MIN(salary) AS smallest_salary,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary), 2) AS average_salary
FROM
    hr.employees;