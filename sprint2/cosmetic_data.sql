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
	is_deleted bit default(0),
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

create table if not exists images(
id int primary key auto_increment,
cosmetic_id int,
image_link varchar(200),
foreign key(cosmetic_id) references cosmetic(id)
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

-- create table if not exists user_roles(
-- 	username varchar(50),
--     role_id int,
--     is_deleted bit default 0,
--     foreign key(username) references user(username),
--     foreign key(role_id) references role(id),
--     primary key(username, role_id)
-- );

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
foreign key (username) references user(username)
);

create table if not exists cart(
id int primary key auto_increment,
username varchar(30),
foreign key(username) references user(username),
is_deleted bit default 0
);

create table if not exists cart_cosmetic(
cart_id int,
cosmetic_id int,
qty int,
is_deleted bit default 0,
foreign key(cart_id) references cart(id),
foreign key(cosmetic_id) references cosmetic(id),
primary key(cart_id, cosmetic_id)
);

-- create table if not exists bill(
-- id int primary key auto_increment,
-- cart_id int,
-- sum_per_one double,
-- is_deleted bit default 0
-- );

-- delimiter //
-- create procedure  cart_info()
-- begin 
-- select (cart.qty*cosmetic.price) as sum_per_one, cart.id, cart.qty, cosmetic.name,
-- cosmetic.price, images.image_link, sum(cart.qty*cosmetic.price) as total_bill
-- from cart 
-- join cosmetic on cart.cosmetic_id = cosmetic.id
-- join images on cosmetic.id = images.cosmetic_id 
-- where cart.is_deleted = 0
-- group by cosmetic.id;
-- select sum(cart.qty*cosmetic.price) as total_bill
-- from cart 
-- join cosmetic on cart.cosmetic_id = cosmetic.id
-- where cart.is_deleted = 0;
-- end //
-- delimiter ;



insert into cos_type (name) values ('Macaca mulatta');
insert into cos_type (name) values ('Meleagris gallopavo');
insert into cos_type (name) values ('Tockus erythrorhyncus');
insert into cos_type (name) values ('Macropus rufogriseus');
insert into cos_type (name) values ('Macropus rufogriseus');
insert into cos_type (name) values ('Castor canadensis');
insert into cos_type (name) values ('Sarkidornis melanotos');
insert into cos_type (name) values ('Milvago chimachima');
insert into cos_type (name) values ('Coendou prehensilis');
insert into cos_type (name) values ('Paraxerus cepapi');

insert into brand (name) values ('Acetylcysteine');
insert into brand (name) values ('Saline Nasal');
insert into brand (name) values ('Amantadine Hydrochloride');
insert into brand (name) values ('NovoLog Mix 70/30');
insert into brand (name) values ('Quik San');
insert into brand (name) values ('TopCare Complete');
insert into brand (name) values ('Sumatriptan Succinate');
insert into brand (name) values ('Vaginitis - Feminine Care');
insert into brand (name) values ('Nighttime');
insert into brand (name) values ('Penicillin V Potassium');

insert into producer (name) values ('Eazzy');
insert into producer (name) values ('Fiveclub');
insert into producer (name) values ('Youtags');
insert into producer (name) values ('Flashspan');
insert into producer (name) values ('Zoomlounge');
insert into producer (name) values ('Vitz');
insert into producer (name) values ('Skaboo');
insert into producer (name) values ('Twitterbeat');
insert into producer (name) values ('Edgepulse');
insert into producer (name) values ('Oyoba');

insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('White Kidney Beans', 62, 4515202, 1, 1, 9, 1, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('lidocaine', 33, 3106319, 1, 1, 1, 2, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Prednisone', 88, 3548408, 2, 5, 4, 4, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Acetaminophen', 35, 3414128, 3, 7, 3, 10, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Azithromycin', 131, 4044052, 3, 5, 8, 3, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Betamethasone Dipropionate', 132, 3557199, 1, 3, 4, 2, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Imipenem', 145, 2177694, 1, 5, 3, 3, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Octinoxate', 35, 1071400, 1, 1, 3, 10, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('modafinil', 144, 3644339, 1, 4, 8, 1, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Zinc Oxide', 40, 4603047, 2, 7, 6, 5, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Butalbital', 139, 3935792, 1, 1, 8, 2, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Promethazine Hydrochloride', 104, 2481367, 1, 1, 9, 4, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('calcium carbonate', 146, 2721060, 2, 4, 4, 7, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Aspirin', 130, 1057763, 3, 7, 1, 9, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Avobenzone', 67, 96924, 2, 3, 3, 5, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Benzalkonium Chloride', 83, 1558670, 3, 10, 5, 5, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'In congue. Etiam justo. Etiam pretium iaculis justo.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Treatment Set TS340987', 117, 2590335, 2, 1, 3, 4, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('Acetaminophen', 73, 1275232, 3, 2, 1, 4, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('lamivudine', 100, 2198558, 1, 4, 1, 8, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.');
insert into cosmetic (name, volume, price, gender, brand_id, cos_type_id, producer_id, descriptions, using_product) values ('ENALAPRIL MALEATE', 81, 2197372, 2, 10, 8, 3, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.');

insert into images (cosmetic_id, image_link) values (1, 'https://cf.shopee.vn/file/4a26ca4c9fa3c1c70135148916fb0f47_tn');
insert into images (cosmetic_id, image_link) values (2, 'https://baobiducphat.vn/wp-content/uploads/2021/07/Cung-c%E1%BA%A5p-chai-l%E1%BB%8D-m%E1%BB%B9-ph%E1%BA%A9m-cao-c%E1%BA%A5p-uy-t%C3%ADn.jpg');
insert into images (cosmetic_id, image_link) values (3, 'https://vietadv.vn/wp-content/uploads/2021/08/hop-giay-my-pham.jpg');
insert into images (cosmetic_id, image_link) values (4, 'https://earthmama.vn/storage/posts/March2022/hoa-la-mot-trong-nhung-thanh-phan-chinh-tao-san-pham-earthmama.jpg');
insert into images (cosmetic_id, image_link) values (5, 'https://media.hasaki.vn/hsk/cosmetics/my-pham-den-tu-my-5.jpg');
insert into images (cosmetic_id, image_link) values (6, 'https://saolamdep.com/wp-content/uploads/2021/02/kem-duong-da-ngua-mun-chong-lao-hoa-obagi-retinol-cream-2.jpg');
insert into images (cosmetic_id, image_link) values (6, 'https://eterrite.com.vn/images/HINH-SP-ETERITE-01-12.jpg');
insert into images (cosmetic_id, image_link) values (7, 'https://eterrite.com.vn/images/HINH-SP-ETERITE-01-08.jpg');
insert into images (cosmetic_id, image_link) values (8, 'https://cdn.tgdd.vn/Products/Images/6562/275810/kem-duong-some-by-mi-aha-bha-pha-30-days-miracle-cream-tri-mun-hop-60g-030522-074241-600x600.jpg');
insert into images (cosmetic_id, image_link) values (9, 'https://static.techecom.vn/15176/category/2021/04/17/slide1-m-1618628508.jpg');

-- select count(cart.id) as countProduct, sum(cart.qty*cosmetic.price)
-- from cart 
-- join cosmetic on cart.cosmetic_id = cosmetic.id 
-- join images on cosmetic.id = images.cosmetic_id 
-- where cart.is_deleted = 0 
-- group by cosmetic.id;

select cosmetic.id as id, cosmetic.name as name, cosmetic.price as price,
images.image_link as imageLink from cosmetic
join images on cosmetic.id = images.cosmetic_id 
where cosmetic.is_deleted = 0 and cosmetic.name like '%%' and cosmetic.gender = 2
group by cosmetic.id;

-- update cart set qty = qty + 1 
-- where id = 1 and is_deleted = 0