/*
* where to store table creations and modifications
*/
create table Users(uid Integer, username varchar(255),
password varchar(255), email varchar(255), followers Integer);

insert into users(uid, username, password, email, followers)
values(1,'jackskellington@7','1234','jackskell@gmail.com',100000);

alter table users
drop column uid, add column uid serial primary key;

alter table users
rename column uid to user_id;

/****************************************************************************/

create table drawings(did Integer, likes Integer, 
replies Integer, drawingURL varchar(255));

insert into drawings(did, likes, replies, drawingurl)
values(1,50,100,'www.clickbait.com');

alter table drawings
drop column did, add column did serial primary key;

alter table drawings
rename to drawing;

/******************************************************************************/

create table posts(uid integer references Users(uid),
pid integer references drawings(pid),
primary key (uid,did));

alter table posts
rename column content to post_content;

alter table posts
rename column timestamp to post_timestamp;

alter table posts
rename column pid to posts_id;

alter table posts
rename column uid to user_id;

/****************************************************************************/

alter table replies
rename column content to replies_content;

alter table replies
rename column timestamp to replies_timestamp;

alter table replies
drop column uid;

alter table replies
add column user_id integer references users(uid);

alter table replies
drop column pid;

alter table replies
add column post_id integer references posts(pid);

alter table replies
add column reply_id serial primary key;

/****************************************************************************/

create table follows(followerid integer references users(uid),
followeeid integer references users(uid),
primary key (followerid,followeeid));

alter table follows
rename column followeeid to followee_id;

alter table follows
rename column followerid to follower_id;