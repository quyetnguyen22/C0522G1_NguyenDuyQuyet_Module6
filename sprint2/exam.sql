create database if not exists football_history;
use football_history;

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

create table if not exists team(
id int primary key auto_increment,
name varchar(50),
coach_name varchar(50),
is_deleted bit default 0
);

create table if not exists player(
id int primary key auto_increment,
player_code varchar(50),
name varchar(50),
date_of_birth varchar(10),
team_id int,
is_deleted bit default 0,
foreign key(team_id) references team(id)
);


create table if not exists penalty_info(
id int primary key auto_increment,
penalty_code varchar(50),
player_id int,
corner int,
result varchar(10),
is_deleted bit default 0,
foreign key(player_id) references player(id)
);

