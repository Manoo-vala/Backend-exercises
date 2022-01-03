USE Scientists;

SELECT * from Scientists;

SELECT Name AS "Nome do projeto", Hours AS "Tempo de trabalho" from Projects;

SELECT Name from Scientists
ORDER BY Name;

SELECT Name from Projects
ORDER BY Name DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser finalizado.') AS 'Resultado' FROM Projects;

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project from AssignedTo;

SELECT Name FROM Projects
ORDER BY Hours;

SELECT Name FROM Projects
ORDER BY Hours LIMIT 1;

SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY Hours DESC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name),' cientistas na tabela Scientists.') FROM Scientists;