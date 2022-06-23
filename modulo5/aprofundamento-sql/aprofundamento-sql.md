SET SQL_SAFE_UPDATES = 0;

# Exercício 1

# 1- A) Excluiria a coluna salary;
# 1- B) Alteraria a coluna gender da tabela actor para receber valores null;
# 1- C)

ALTER TABLE actor
MODIFY gender VARCHAR(100);

# Exercício 2

# 2- A)

UPDATE actor
SET name = "Moacyr Franco", birth_date = "1985-05-03"
WHERE id = "003";

# 2- B)

UPDATE actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

# 2- C)

UPDATE actor
SET name = "Marco Pigossi", salary = 900000, birth_date = "1989-02-01", gender="male"
WHERE id = "005";

# 2- D)

UPDATE actor
SET name = "Rugal Apelão"
WHERE id = "009";

# Não retorna erro, mas não danificou a linha;