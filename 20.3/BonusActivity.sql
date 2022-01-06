USE PiecesProviders;

SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT * FROM Provides;

SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';

SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

SELECT Provider, Price FROM Provides
ORDER BY PRICE DESC
LIMIT 4 OFFSET 3;

SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

SELECT COUNT(Piece = 1) AS Piece1 FROM Provides;
