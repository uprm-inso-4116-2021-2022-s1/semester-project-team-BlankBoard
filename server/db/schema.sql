/*
* where to store table creations and modifications
*/
create table Users(uid Integer, username varchar(255),
password varchar(255), email varchar(255), followers Integer);

insert into users(uid, username, password, email, followers)
values(1,'jackskellington@7','1234','jackskell@gmail.com',100000);

alter table users
drop column uid, add column uid serial primary key;

/****************************************************************************/

create table drawings(did Integer, likes Integer, 
replies Integer, drawingURL varchar(255));

insert into drawings(did, likes, replies, drawingurl)
values(1,50,100,'www.clickbait.com');

alter table drawings
drop column did, add column did serial primary key;

alter table drawings
rename to drawing;

/****************************************************************************/

create table Draws(uid integer references Users(uid),
did integer references drawings(did),
primary key (uid,did));

/****************************************************************************/

create table follows(followerid integer references users(uid),
followeeid integer references users(uid),
primary key (followerid,followeeid));
