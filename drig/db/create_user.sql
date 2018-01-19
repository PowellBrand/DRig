insert into users
(username, email, auth_id, admin)
values
($1, $2, $3, false)
returning *;