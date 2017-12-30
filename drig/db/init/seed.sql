create table blogmessage (
id serial primary key,
name varchar(20),
date text,
message text
);

insert into blogmessage (name, date, message)
values
('Brandon', 'Dec 22 2017', 'This is a test message')

create table character (
id serial primary key,
name varchar(30),
age integer,
description text
);

insert into character (name, age, description)
values
('sid', 27, 'main character...')

create table worldinfo (
id serial primary key,
name varchar(20),
location text,
description text
);

insert into worldinfo (name, location, description)
values
('heber', 'wasatch county', 'Promise land')