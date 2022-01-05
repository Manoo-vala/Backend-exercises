USE PecasFornecedores;

SELECT * FROM Pecas;
SELECT *  FROM Fornecedores;
SELECT * FROM Fornecimentos;
SELECT * FROM Vendas;

SELECT * FROM Pecas
WHERE name LIKE 'Gr%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT Peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(code) FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date)
BETWEEN '2018-04-15' AND '2019-07-30';