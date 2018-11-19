Vega PG Intro
===

Building from the SQL intro lecture with the following:

```
CREATE DATABASE "music_library";
```

```
CREATE TABLE "songs" (
  "id" serial primary key,
  "rank" integer,
  "artist" varchar(80) not null,
  "track" varchar(120) not null,
  "published" date
);
```

```
INSERT INTO "songs" ("rank", "track", "artist", "published") 
VALUES (357, 'Wonderwall', 'Oasis', '1-1-1996'),
(102, 'Under the Bridge', 'Red Hot Chili Peppers', '1-1-1992');
```