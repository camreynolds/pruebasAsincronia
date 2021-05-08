CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
	(1, 'Carlo Andres', 100000),
    (2, 'Juan Luis', 50000),
    (3, 'Cristobal Ramón', 10000);

