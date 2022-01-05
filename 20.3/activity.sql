USE sakila;

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> "KENNETH"
ORDER BY first_name, last_name;

SELECT title, description, release_year, replacement_cost FROM film
WHERE (rating = "G"
OR rating = "PG"
OR rating = "PG-13")
AND replacement_cost > 18
ORDER BY replacement_cost, title
LIMIT 100;

-- =====================================================================================

USE sakila;

SELECT * FROM film
WHERE title LIKE "%ace%";

SELECT * FROM film
WHERE description LIKE "%china";

SELECT * FROM film 
WHERE description LIKE "%girl%"
AND title LIKE "%lord";

SELECT * FROM film
WHERE title LIKE "___gon%";

SELECT * FROM film
WHERE title LIKE "___gon%"
AND description LIKE "%Documentary%";

SELECT * FROM film
WHERE title LIKE "%academy"
OR title LIKE "mosquito%";

SELECT * FROM film
WHERE description LIKE "%monkey%"
AND description LIKE "%sumo%";

-- =======================================================================================

USE sakila;

SELECT * FROM payment
WHERE payment_id IN (269, 239, 126, 399, 142);

SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- ============================================================================================

USE sakila;
SELECT * FROM customer;

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176);

SELECT * FROM payment;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date)
BETWEEN '2005-05-01' AND '2005-08-01';

-- ===========================================================================================

USE sakila;

SELECT * FROM payment;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT * FROM payment
WHERE DATE(payment_date) 
BETWEEN '2005-01-07' AND '2005-08-22';


SELECT * FROM rental;
SELECT DATE(rental_date) AS 'Data', 
YEAR(rental_date) AS 'Ano', 
MONTH(rental_date) AS 'Mês', 
DAY(rental_date) AS 'Dia', 
HOUR(rental_date) AS 'Hora', 
MINUTE(rental_date) AS 'Minuto', 
SECOND(rental_date) AS 'Segundo'
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;
