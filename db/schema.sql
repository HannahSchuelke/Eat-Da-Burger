-- SHOULD BE CORRECT

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  item_id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (item_id)
);
