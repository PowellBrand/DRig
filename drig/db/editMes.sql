update blogmessage
set title = $1, date = $2, author = $3, message = $4
where id = $5
returning *;