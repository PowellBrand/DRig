-- blog message seed
create table if not exists blogmessage (
id serial primary key,
title varchar(100),
date text,
author text,
message text
);

insert into blogmessage (title, date, author, message)
values
($1, $2, $3, $4);