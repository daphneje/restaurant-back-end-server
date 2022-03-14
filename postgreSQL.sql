CREATE TABLE tables (
table_id serial primary key,
created_at timestamp,
updated_at timestamp 
);

CREATE TABLE orders (
order_id serial primary key,
table_id int,
date_time timestamp,
restaurant_id int,
no_of_pax int,
bill_amount numeric (5,2),
status varchar,
created_at timestamp,
updated_at timestamp);

CREATE TABLE order_items (
order_item_id serial primary key,
order_id int,
item_id int,
item_title varchar not null,
item_unit_price numeric (5, 2) not null,
quantity int,
special_request varchar(100),
status varchar);

CREATE TABLE admin (
admin_id serial primary key,
order_item_id int);

CREATE TABLE item_categories (
item_category_id serial primary key,
title varchar not null,
image varchar);

CREATE TABLE items (
item_id serial primary key,
item_category_id int,
title varchar not null,
description varchar not null,
unit_price numeric (5, 2) not null,
image varchar);


ALTER TABLE items ADD CONSTRAINT fk_item_category_id FOREIGN KEY (item_category_id) REFERENCES item_categories(item_category_id);

ALTER TABLE admin ADD CONSTRAINT fk_order_item_id FOREIGN KEY (order_item_id) REFERENCES order_items(order_item_id);

ALTER TABLE order_items ADD CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES orders(order_id);

ALTER TABLE orders ADD CONSTRAINT fk_table_id FOREIGN KEY (table_id) REFERENCES tables(table_id);
