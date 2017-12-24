create table blogmessage (
id serial primary key,
name varchar(20),
date text,
message text
);

insert into blogmessage (name, date, message)
values
('Brandon', 'Dec 22 2017', 'This is a test message')