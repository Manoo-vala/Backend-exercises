SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.payment;

SELECT a.actor_id, f.film_id, a.first_name
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT stf.first_name, stf.last_name, ad.address_id, ad.address
FROM sakila.staff AS stf
INNER JOIN sakila.address AS ad
ON stf.address_id = ad.address_id;

SELECT c.customer_id, c.first_name, a.address_id, a.address, c.email
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address,a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address_id) AS 'Quantidade'
FROM sakila.customer AS c
INNER JOIN 
    sakila.address AS a ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS Payment
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
INNER JOIN sakila.film AS f
ON fa.actor_id = a.actor_id AND fa.film_id = f.film_id;
