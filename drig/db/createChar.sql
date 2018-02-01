insert into characters
(name, full_name, species, sex, height, weight, skin_color, hair_color, eye_color, features, date_of_birth, place_of_birth, LocID,
date_of_ordination, place_of_ordination, identification_number, echelon, occupation, background)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
returning *;