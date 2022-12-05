create database if not exists cosmetic_management;

use cosmetic_management;

create table if not exists brand(
id int primary key auto_increment,
name varchar(50)
);

create table if not exists cos_type(
id int primary key auto_increment,
name varchar(50)
);

create table if not exists producer(
id int primary key auto_increment,
name varchar(50)
);

create table if not exists skind(
id int primary key auto_increment,
name varchar(50)
);

create table if not exists cosmetic(
	id int primary key auto_increment,
    name varchar(100),
	is_deleted bit default 0,
	volume varchar(50),
    price double,
    gender int,
    brand_id int,
	cos_type_id int,
	producer_id int,
	descriptions text,
    using_product text,
    foreign key(brand_id) references brand(id),
    foreign key(cos_type_id) references cos_type(id),
    foreign key(producer_id) references producer(id)
);

create table if not exists cosmetic_skind(
cosmetic_id int,
skind_id int,
is_deleted bit default 0,
primary key(cosmetic_id, skind_id),
foreign key(cosmetic_id) references cosmetic(id),
foreign key(skind_id) references skind(id)
);

create table if not exists user(
	username varchar(30) primary key,
    password varchar(200),
    is_deleted bit default 0
);

create table  if not exists role(
	id int primary key auto_increment,
    name varchar(30),
    is_deleted bit default 0
);

create table if not exists user_role(
	username varchar(50),
    role_id int,
    is_deleted bit default 0,
    foreign key(username) references user(username),
    foreign key(role_id) references role(id),
    primary key(username, role_id)
);

create table if not exists customer(
id int primary key auto_increment,
name varchar(50),
email varchar(50),
phone varchar(10),
address varchar(50),
date_of_birth date,
gender int,
username varchar(50) unique,
is_deleted bit default 0,
password varchar(50),
foreign key (username) references user(username)
);