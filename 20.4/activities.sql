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

