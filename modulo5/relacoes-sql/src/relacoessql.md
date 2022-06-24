Exer1
a) funciona como uma coluna em tabela, dando uma forma melhor de operar.

b) 
CREATE TABLE Comentarios (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        filmes_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES filmes(id)
);

INSERT INTO Comentarios VALUES(
"005", "The best movie ever!", 10, 005
);

INSERT INTO Comentarios VALUES(
"003", "Great movie!", 8, 003
);

SELECT * FROM filmes where id = 005;

c) 
Error Code: 1452. Erro na foreign key (inexistente)!

d)
ALTER TABLE filmes
DROP COLUMN avaliacao;

DESCRIBE filmes;

e) 
DELETE FROM filmes
WHERE avaliacao = 10;
-- Error Code: 1054. Unknown column 'avaliacao' in where clause. (pois exclui a coluna avaliação no exercício anterior.
