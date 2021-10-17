/*
* where to store table creations and modifications
*/

/****************************************************************************/

create table Users(uid Integer, username varchar(255),
password varchar(255), email varchar(255), followers Integer);

insert into users(uid, username, password, email, followers)
values(1,'jackskellington@7','1234','jackskell@gmail.com',100000);

alter table users
drop column uid, add column uid serial primary key;

ALTER TABLE Users ALTER COLUMN followers SET DEFAULT 0;

/****************************************************************************/

create table follows(followerid integer references users(uid),
followeeid integer references users(uid),
primary key (followerid,followeeid));

/****************************************************************************/

create table blocks (
blocker_id int references users (uid) on delete cascade,
blockee_id int references users (uid) on delete cascade,
primary key(blocker_id,blockee_id)
);

/****************************************************************************/

create table posts (
pid serial unique primary key,
uid int references users on delete cascade,
content varchar(255) not null,
timestamp timestamptz default now()
);

/****************************************************************************/

create table replies (
  uid int references users (uid) on delete cascade,
  pid int references posts (pid) on delete cascade,
  content varchar(255) not null,
  primary key(uid,pid),
  timestamp bigint not null
);

/****************************************************************************/
