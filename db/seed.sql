CREATE TABLE homies(
user_id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR,
profile_img TEXT
);

CREATE TABLE homies_hash (
hash_id SERIAL PRIMARY KEY,
hash TEXT,
user_id int REFERENCES homies(user_id)
);

CREATE TABLE posts(
post_id serial PRIMARY key,
title VARCHAR(40),
img_url text,
content text,
likes INT,
user_id INT REFERENCES homies(user_id)
);