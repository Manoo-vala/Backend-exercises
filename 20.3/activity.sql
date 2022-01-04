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