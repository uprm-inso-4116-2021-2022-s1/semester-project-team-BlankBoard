/*
* where to store table creations and modifications
*/
create table Users(uid Integer, username varchar(255),
password varchar(255), email varchar(255), followers Integer);

insert into users(uid, username, password, email, followers)
values(1,'jackskellington@7','1234','jackskell@gmail.com',100000);

/****************************************************************************/

create table drawings(did Integer, likes Integer, 
replies Integer, drawingURL varchar(255));

insert into drawings(did, likes, replies, drawingurl)
values(1,50,100,'www.clickbait.com');