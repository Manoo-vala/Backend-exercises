DROP DATABASE IF EXISTS Students;

CREATE DATABASE Students;

CREATE TABLE student(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(250)
  PRIMARY KEY (id)
);