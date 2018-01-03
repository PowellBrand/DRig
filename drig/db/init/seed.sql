-- blog message seed
create table blogmessage (
id serial primary key,
name varchar(20),
date text,
message text
);

insert into blogmessage (name, date, message)
values
('Brandon', 'Dec 22 2017', 'This is a test message')

-- characters seed
create table characters (
id serial primary key,
Name VARCHAR(30),
full_name text,
Species text,
Sex varchar(6),
height text,
weight integer,
skin_color text,
Hair_color text,
Eye_color text,
Features text,
date_of_birth text,
Place_of_birth text,
Date_of_ordination text,
Place_of_ordination text,
Identification_number text,
Echelon text,
Occupation text,
Background text
)
insert into characters (name, full_name, species, sex, height, weight, skin_color, hair_color, eye_color, features, date_of_birth, place_of_birth,
date_of_ordination, place_of_ordination, identification_number, echelon, occupation, background)
values('sid', 'Sidley Adas Stroud-Madysta', 'Pilgrim', 'Female', '5 ft 3 in', 121, 'Light', 'Dark Brown', 'Varies, naturally Brown',
 'Excessive scarification patterns across face and body, various facial and body piercings.', '12-4-275', 'Frost Harbor, Third Territory of Kell',
  '12-4-287', 'Ravine, Sixth Territory of Kell', '5258-75-3-4477', 'Proselyte', 'Scavenger of Clan Winter',
  'A scavenger of Kell’s dangerous wildlands, Sid Madysta is an unparalleled hunter of relics due to various cybernetic enhancements. Sid didn’t volunteer for the procedure that left her covered in dozens of scar-like glyphs, and she was never trained to properly use the abilities the procedure granted. Learning through experience, Sid uses her cybernetics to see almost every detail in her environment, whether it’s an item she can claim and sell, an animal she can kill to feed her clan, or numerous strange energy signatures across the wildlands that she can’t logically explain.'),
  ('Kessler', 'Unknown', 'Pilgrim', 'Male', '6 ft 4 in', 210, 'Light', 'Blonde', 'Blue',
 'Wears a dark blue hardsuit and a helmet with a gold visor. Carries numerous weapons including a pair of rifles that rest diagonally on his back using magnetic holster technology.', 'Unknown', 'Unknown',
  '5-1-294', 'The Core, Seventh Territory of Kell', '5559-21-5-9592', 'Chaplain', 'Unknown, formerly a militia ranger',
  'A natural leader with a charismatic personality and a mind for tactics, Kessler draws allies to him without trying and intimidates his foes through his unyielding loyalty and moral compass. Though he doesn’t know the answer to every question or have a solution to every problem, Kessler’s unwavering faith in the Diviness and the Elementals fuels his courage and always seems to carry him through the toughest of conflicts.'),
  ('The Revenant', 'Unknown', 'Unknown', 'Male??', '~ 6 ft', 160, 'Unknown', 'Unknown', 'Unknown',
 'Wears a long, black coat with a hood that obscures its face and body.', 'Unknown', 'Unknown',
  'No Record', 'No Record', 'No Record', 'No Record', 'No Record',
  'The creature known only as “the Revenant” stalks the Seventh City’s Underworld. The innocent denizens of the city view the Revenant as a wrathful sprite created by the devil-god, Kathari, with no purpose beyond murder. The faction enforcers know the Revenant as a vengeful vigilante due to its tendency to meddle with their business ventures. Whatever the Revenant’s true goals are, its methods leave death and fear wherever it’s sighted. Reports of a humanoid man in a black cloak wielding an intricate bow and grotesque-looking swords have spread panic throughout Underworld, and most think it’s only a matter of time before the Revenant draws the attention of the Septrium.'),
  ('Malcon the Swordsman', 'Malcon Garat Qnon-Xerse', 'Nocturnal', 'Male', '5 ft 10 in', 156, 'Black', 'Unknown', 'Yellow',
 'Always carries a pair of switchswords.', '38-5-266', 'Underworld, Seventh Territory of Kell',
  'No Record', 'No Record', 'No Record', 'No Record', 'Leader of the Sword',
  'A well-known story throughout the Seventh City tells of a lone Nocturnal swordsman who battled over a dozen fighters in the Galaron. The swordsman defeated each of his foes in turn, and won passage to the Core for both himself and a large number of his followers. It was this action that established the Sword’s presence in the Core, making them one of the most influential factions in the Seventh City. That swordsman was Malcon. In the time since his great victory Malcon has faced numerous challengers in combat, and each time he has proved his prowess. It’s said that the Swordsman has grown prideful over the years, often choosing to wield his enforcers like weapons when he believes his challengers are beneath his notice. As his pride has grown, his honor has diminished.'),
  ('Fake April', 'April Devorah Harrow-Brielle', 'Paragon', 'Female', '6 ft 1 in', 112, 'Varies', 'Varies', 'Varies',
 'Most of her features routinely change, but she has the Mark of the Pariah permanently covering her back in black bhatlor.', '50-6-272', 'The Zenith, Seventh Territory of Kell',
  '50-6-284', 'The Zenith, Seventh Territory of Kell', '3637-91-1-9537', 'None, Marked', 'Leader of the Red Escorts',
  'April Devorah Harrow-Brielle was once an esteemed daughter of Yannis Harrow, one of the most powerful individuals on the Zenith, but her tendency to go against her family’s wishes and break the Zenith’s rules ultimately resulted in her banishment. She lost her echelon and was marked as a Pariah. April became the first Paragon ever sent to Underworld, yet in only a few short months she managed to free herself and dozens of slaves from the Sovereign Bled while establishing her own faction in Underworld’s aptly-named Helldoor. There are rumors that she, eventually known as “Fake April”, used dark powers of seduction to manipulate the Revenant into killing her oppressors, but the truth of these rumors is unknown.'),
  ('The Savage', 'Unknown', 'Pilgrim', 'Male', '6 ft 1 in', 223, 'Light', 'Bald', 'Black',
 'Poorly done bhatlor covers his body in streaks of black and red. Wears a red mask shaped like a human’s face.', 'Unknown', 'Unknown',
  'No Record', 'No Record', 'No Record', 'No Record', 'Leader of the Sovereign Bled',
  'One of the most feared factions in Underworld is the Sovereign Bled, and much of this fear is due to the reputation of their leader, the Savage. He was once considered a warrior with few challengers who could claim anyone as his slave, though more recently he has taken to hiding in his inner sanctum. The Savage no longer trusts any but his closest followers, and spends his days hiding, meditating and torturing slaves that are periodically brought to him. His lack of action has created exactly what he fears: enemies within his own faction.'),
  ('Considine the Alchemist', 'Unknown', 'Pilgrim', 'Male', '5 ft 10 in', 145, 'Light', 'Gray', 'Gray',
 'Looks very sickly at all times.', '25-3-243', 'Underworld, Seventh Territory of Kell',
  'No Record', 'No Record', 'No Record', 'No Record', 'Leader of the HT Ring Final',
  'When the HT Ring Final faction split from the old Blood Ring they choose a new leader. Though his real name is not known, the man they call Considine the Alchemist gave the new faction a strong focus on mass biothread production. Their products quickly spread through Underworld, but their biothreads were so inferior to those made by Mystech that side-effects including addiction were common. This would have made the HT Ring Final vastly wealthy if their leader didn’t overindulge in the biothreads himself, and squander most of what they gained. Considine’s direct access to poorly made biothreads has made him weak of both mind and body — a mutated husk of what he once was.'),
  ('The Dread Queen', 'Narranda Kaliés', 'Nocturnal', 'Female', '5 ft 4 in', 116, 'Black', 'Unknown', 'White',
 'Wears jewelry and makeup along with the white armor of her faction.', '43-1-266', 'The Core, Seventh Territory of Kell',
  'No Record', 'No Record', 'No Record', 'No Record', 'Head Enforcer of the Janadrien',
  'The rumors surrounding the Dread Queen of the Janadrien faction tell a story of a woman envious of the power wielded by the faction leaders of the Seventh City. She is someone who will compromise her morals and beliefs to take that power and use it to gain more recognition within the city. To that end, she has lied and coerced her way up the Janadrien’s chain of command and is now the wife of Axia the Dread. As the most visible representative of the Janadrien, Narranda Kaliés manages the Galaron, a combat arena connecting Underworld to the Core and a place that provides gambling and excitement to citizens who find bloodshed entertaining.'),
  ('Carridan', 'Unknown', 'Hybri', 'Female', '5 ft 7 in', 131, 'Tan', 'Dark red', 'Dark red',
 'White bhatlor in the shape of a humanoid skull covers her face.', 'Unknown', 'Unknown',
  'No Record', 'No Record', 'No Record', 'No Record', 'Leader of the Shade',
  'If knowledge is power, the head enforcer of the Shade is the most powerful person in the Seventh City. As an information network without boundaries, Carridan is perhaps the only person in the Seventh City that knows more about its people than the Septry. But no amount of power is enough to sate Carridan’s greed, and she cares little for mundane matters. She wants the darkest secrets of the Paragons; the most terrible facts about the most self-righteous people on Syenna, because only then can she tare it all down.')



-- World info seed
create table worldinfo (
id serial primary key,
name varchar(20),
location text,
description text
);

insert into worldinfo (name, location, description)
values
('heber', 'wasatch county', 'Promise land')