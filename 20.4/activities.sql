USE sakila;
SELECT * FROM staff;
SELECT * FROM actor;
SELECT * FROM customer;
SELECT * FROM category;
SELECT * FROM store;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, username)
VALUES ('Seguedille', 'Manzanilla', 2, 'Unicuri@jordão.com', 2, 'G7Autopeças');

INSERT INTO staff(first_name, last_name, address_id, email, store_id, username) VALUES
('Mandacaru', 'Rural', 2, 'MandaElCaru@gaymeil.com', 2, 'MaztruszIsGood'),
('Pimpolho', 'da Silva', 2, 'Alfazema@loading.com', 2, 'Simpililim');

INSERT INTO actor(first_name, last_name)
	SELECT first_name, last_name 
    FROM customer
    ORDER BY customer_id
    LIMIT 5;
    
INSERT INTO category(name) VALUES
('Adult'),
('Nobody'),
('Gospel');

INSERT INTO store(manager_staff_id, address_id)
VALUES (3, 3);

-- ==========================================================================================================

SET SQL_SAFE_UPDATES = 0;
USE sakila;
SELECT * FROM actor;
SELECT * FROM category;
SELECT * FROM film;

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE category
SET `name` = 'Science Fiction'
WHERE `name` = 'Sci-fi';

UPDATE film
SET rental_rate = 25
WHERE `length` > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
	CASE  
		WHEN `length` BETWEEN 0 AND 100 THEN 10
		WHEN `length` > 100 THEN 20
END);

-- ==================================================================================================

SET SQL_SAFE_UPDATES = 0;
SELECT * FROM film_actor;
SELECT * FROM sakila.film_text;
SELECT * FROM actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
