select worldinfo.name, worldinfo.description
from worldinfo
join characters
on worldinfo.locid = characters.locid
where description != 'Null';