-- World info seed
create table if not exists worldinfo (
id serial primary key,
name varchar(100),
LocID text,
description text
);

insert into worldinfo (name, LocID, description)
values
('Frost Harbor', 'FroHar',
'A small town on the edge of a massive lake. The town is mostly inhabited by divers who make money by searching for the viridistones that tend to form at the bottom of Evergreen Lake. The occupation is very dangerous — and not just because the lake itself is almost always covered in a sheet of green ice. The lake is also casually referred to as the Sea of Souls partly because so many divers perish while seeking their fortune, but also due to strange, almost magical sightings that are often reported once divers travel so far out that the shoreline disappears. There are tales of humanoid figures that walk on the ice and even the water itself without sinking under. Other tales are of strange fish-people the divers call “merads”, and that are especially beautiful, and especially deadly. Reports of great sea monsters are the most common of all, but Frost Harbor still manages to draw divers to it. They navigate the icy lake in “chopper-boats” that cut up the ice with spinning blades attached to their bows, even as the ice quickly reforms behind them.'
),
('Ravine', 'Rav',
'Perched precariously on the inner wall of a wide gulch is the settlement only known as Ravine. Comprised of hundreds of structures made from both metal and sandstone, the settlement is connected by bridges and can only be accessed through two well-protected gates; one at the top, and one at the bottom alongside the Murky River. Ravine’s population enjoys a great amount of safety from the wildlands’ storms, monsters, and nomadic raiders. The settlement is even protected from assaults by levships and orbital platforms due to a darklight barrier surrounding it, having been the second city provided such protection by Aldric Sheridan and his followers near the end of the Nocturnal War.'
),
('Underworld', 'Und',
'Skulking beneath the Core of the Seventh City is Underworld, a lawless domain formed within the wreckage of the Nocturnal War. Underworld is controlled by numerous factions who commonly rule through the exploitation of Underworld’s unfortunate citizens. The factions are constantly warring with each other to gain more territory and more wealth. These wars inevitably end in one faction being destroyed or absorbed, and the victor overtaking their territory and expanding their operations. Alliances are quickly formed and broken propagating new wars between old allies. Vast and dangerous, Underworld is said to be filled with lost secrets from ages past, but it’s usually considered too dangerous for the average scavenger to venture there.'
),
('The Core', 'TheCor',
'The middle section of the Seventh City is known as the Core, and is where the majority of its citizens live and work. Though the Core is far below the Zenith, it’s still several thousand feet above Underworld so visitors and supplies usually arrive by levship. Thousands of bridges connect hollowed-out skyscrapers that have been repurposed into all manner of businesses and dwellings. The Core is so densely populated that most of the living areas are small shared quarters with community restrooms and food preparation areas. A well-armed but corrupt militia monitors the Core’s various districts, and patrols the crossways in the name of the Septry.'
),
('The Zenith', 'TheZen',
'At the topmost spire of the Seventh City there is a massive darklight generator that keeps the city protected from orbital strikes. In order to keep the darklight barrier running, people have been stationed there since the end of the Nocturnal War. A society has formed around these architects as the years have gone by, and the Zenith and its Paragons were born from it. It became a sign of wealth and power to live on the Zenith, which quickly expanded into a shining utopia at the top of the war-damaged towers of the Seventh City. Over the last century, Paragons have taken to modifying themselves to reach their version of perfection, and are often not even considered the same race as the average humans below.'
),
('Null', 'Unk',
'Null'
);

-- World/Char join 
select characters, worldinfo
from characters
inner join worldinfo
on characters.locid = worldinfo.locid