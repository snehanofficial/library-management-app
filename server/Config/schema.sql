CREATE DATABASE library_management_db;

USE library_management_db;

CREATE TABLE categories (
    id int PRIMARY KEY AUTO_INCREMENT,
    category_name varchar(150)
);

CREATE TABLE books (
    id int PRIMARY KEY AUTO_INCREMENT,
    book_name varchar(150) not null,
    author varchar(150),
    category_id int,
    description text,
    price decimal(10,2),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key (category_id) references categories (id)
);

create table users (
    id int primary key AUTO_INCREMENT,
    name varchar(150) not null,
    email varchar(150) not null,
    password varchar(255) not null,
    is_admin bool default false,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);
