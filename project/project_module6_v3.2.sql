create database if not exists project_module_6_v3;

use project_module_6_v3;

create table if not exists promotion(
	id int primary key auto_increment,
	name varchar(50),
	is_delete bit default 0,
	image text,
	start_time varchar(50),
	end_time varchar(50),
	detail text,
	discount varchar(50)
);

create table if not exists user(
	user_name varchar(30) primary key,
    password varchar(30),
    is_delete bit default 0
);

create table  if not exists role(
	id int primary key auto_increment,
    name varchar(30),
    is_delete bit default 0
);

create table if not exists user_role(
	user_name varchar(30),
    role_id int,
    is_delete bit default 0,
    foreign key(user_name) references user(user_name),
    foreign key(role_id) references role(id),
    primary key(user_name, role_id)
);

create table if not exists customer_type(
	id int primary key auto_increment,
    name varchar(30),
    is_delete bit default 0
);

create table if not exists customer(
	id int primary key auto_increment,
	name varchar(30),
	is_delete bit default 0,
	day_of_birth varchar(30),
	gender int,
	id_card varchar(12),
	email varchar(100),
	address varchar(200),
	phone_number varchar(15),
	user_name varchar(30) unique,
	customer_type_id int,
	foreign key (user_name) references user(user_name),
	foreign key (customer_type_id) references customer_type(id)
);

create table if not exists saving_point(
	id int primary key auto_increment,
	point int,
	day_booking datetime,
	customer_id int,
	foreign key(customer_id) references customer(id)
);

create table if not exists employee(
	id int primary key auto_increment,
	name varchar(50),
	gender int,
	email varchar(100),
	address varchar(200),
	phone_number varchar(15),
	user_name varchar(30) unique,
	id_card varchar(12),
	day_of_birth varchar(30),
	image varchar(500),
	is_delete bit default 0,
	foreign key (user_name) references user(user_name)
);

create table if not exists movie_type(
	id int primary key auto_increment,
	name varchar(50),
	is_delete bit default 0
);

create table if not exists movie(
	id int primary key auto_increment,
	name text,
	is_delete bit default 0,
	image text,
	start_day varchar(100),
	end_day varchar(100),
	director varchar(50),
	film_time int,
	trailer text,
	movie_type_id int,
	content text,
	film_studio varchar(50),
	actor text,
	version int,
	foreign key(movie_type_id) references movie_type(id),
    employee_id int,
    foreign key (employee_id) references employee(id)
);

create table if not exists promotion_detail(
	id int primary key auto_increment,
    promotion_id int,
    foreign key(promotion_id) references promotion(id),
    customer_type_id int ,
    foreign key(customer_type_id) references customer_type(id),
    is_delete bit default 0
);

create table if not exists comment_movie(
	id int primary key auto_increment,
    movie_id int ,
    foreign key(movie_id) references movie(id),
    time_comment datetime,
    point_comment int ,
    content_comment text,
	is_delete bit default 0
);

create table if not exists room(
	id int primary key auto_increment,
	name varchar(50),
is_delete bit default 0,
    maximum_seats_in_room int
);

create table if not exists seat(
id int primary key auto_increment,
name varchar(50),
is_delete bit default 0
);

create table if not exists seat_type(
id int primary key auto_increment,
name varchar(50),
price int,
is_delete bit default 0
);

create table if not exists seat_room(
id int primary key auto_increment,
is_delete bit default 0,
room_id int,
seat_id int,
seat_type_id int,
foreign key(room_id) references room(id),
foreign key(seat_type_id) references seat_type(id),
foreign key(seat_id) references seat(id)
);

create table if not exists times(
id int primary key auto_increment,
is_delete bit default 0,
start_time varchar(10)
);

create table if not exists show_times(
id int primary key auto_increment,
is_delete bit default 0,
date_projection date,
times_id int,
movie_id int,
room_id int,
foreign key(movie_id) references movie(id),
foreign key(room_id) references room(id),
foreign key(times_id) references times(id)
);

create table  if not exists seat_detail(
id int primary key auto_increment,
is_delete bit default 0,
show_time_id int,
seat_room_id int references seat_room(id),
status_seat bit,
foreign key (show_time_id) references show_times(id)
);

create table if not exists ticket(
id int primary key auto_increment,
is_delete bit default 0,
customer_id int,
seat_detail_id int,
status_ticket int,
ticket_booking_time datetime,
foreign key(customer_id) references customer(id),
foreign key(seat_detail_id) references seat_detail(id)
);



