SELECT UCASE('trybe') AS ESCUELA;
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google') AS Gulu;
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL') AS COISINHO;

-- ==============================================================================================

SELECT * FROM sakila.film;
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti o filme', 'Não conheço o filme') 
	AS 'Conheço o filme?'
	FROM sakila.film;
    
SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre pra todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM sakila.film;

-- ==============================================================================================

USE sakila;

SELECT * FROM film;

SELECT AVG(`length`) AS 'Média de Duração',
	   MIN(`length`) AS 'Duração minima',
       MAX(`length`) AS 'Duração maxima',
       SUM(`length`) AS 'Tempo de Exibição Total',
       COUNT(title) AS 'Filmes registrados'
FROM film;