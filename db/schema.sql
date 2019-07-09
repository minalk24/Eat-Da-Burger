
-- Drops the eatdaburgers_db if it exists currently
DROP DATABASE IF EXISTS eatdaburgers_db;
-- Creates the "eatdaburgers_db" database
CREATE DATABASE eatdaburgers_db;
-- specify that all of the following code will affect eatdaburgers_db
USE eatdaburgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);