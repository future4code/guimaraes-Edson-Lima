USE `guimaraes-4211207-edson-lima`;

CREATE TABLE actor(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE ACTOR;

INSERT INTO actor(id, name, salary, birth_date,gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);



