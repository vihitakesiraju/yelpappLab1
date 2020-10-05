CREATE DATABASE yelpdata;
CREATE TABLE yelpdata.logincredentials
(
    emailid varchar(255) NOT NULL PRIMARY KEY,
    user_pwd varchar(255) NOT NULL ,
    usertype varchar(10) NOT NULL
);
 
Drop table  yelpdata.custprimarydata;
 
CREATE UNIQUE INDEX logincredentials_index ON yelpdata.logincredentials(emailid);
 
 CREATE TABLE yelpdata.custprimarydata
(
    Custid int  NOT NULL PRIMARY KEY auto_increment,
    Name varchar(255) NOT NULL,
    Age int ,
    DOB date Not Null,
    PhoneNo varchar(15) Not Null,
    Emailid varchar(20) Not Null,
    FOREIGN KEY (Emailid) REFERENCES yelpdata.logincredentials(Emailid)
);

create UNIQUE index custprimarydata_index on yelpdata.custprimarydata(Custid);

drop table yelpdata.custprimarydata;

create table yelpdata.custreviewdata(

Custid int  NOT NULL PRIMARY KEY,
Reviewcount int not null,
yelpingsince date ,
thingsloved varchar(255) ,
findme varchar(255),
blogref varchar(200),
foreign key (Custid) references yelpdata.custprimarydata(Custid)
);

create UNIQUE index custreviewdata_index on yelpdata.custreviewdata(Custid);

drop index custreviewdata_index on yelpdata.custprimarydata;

create table yelpdata.restaurantdata(
restid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restname varchar(255) NOT NULL,
    restloc varchar(255) NOT NULL,
    restdesc varchar(550),
    restaddr varchar(255) NOT NULL,
    restcity varchar(255) NOT NULL,
    reststate varchar(255) NOT NULL,
    rest_zipcode varchar(255) NOT NULL,
    rest_latitude FLOAT NOT NULL,
    rest_longitude FLOAT NOT NULL,
    primary_phone varchar(15) NOT NULL,
    secondary_phone int,
    Email varchar(255) NOT NULL,
    openingtime TIME NOT NULL,
    closingime TIME NOT NULL,
    avgrating int NOT NULL DEFAULT 0,
    reviewcount int NOT NULL DEFAULT 0,
    is_open int NOT NULL DEFAULT 0,
    rest_img_url varchar(400),
    dishid int not null
   
    );
    
    create UNIQUE index restaurantdata_index on yelpdata.restaurantdata(restid);
    
    CREATE TABLE yelpdata.reviews
(
    reviewid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Custid int  NOT NULL,
    restid int NOT NULL,
    rating int NOT NULL DEFAULT 0,
    review_date date,
    review_text varchar(1000),
    FOREIGN KEY(Custid) REFERENCES yelpdata.custprimarydata(Custid),
    FOREIGN KEY(restid) REFERENCES yelpdata.restaurantdata(restid)

);
   create UNIQUE index reviews_index on yelpdata.reviews(restid);
   
   
    create table yelpdata.dishesdata(
    menuid int not null ,
    dishid varchar(10) not null,
    ingredients varchar(500),
    dish_img_url varchar(400),
    price float not null default 0,
    dish_desc varchar(400),
    categoryid int,
    restid int,
     foreign key (restid) references yelpdata.restaurantdata(restid)
    );
    
    create UNIQUE index dishesdata_index on yelpdata.dishesdata(dishid);
    
    CREATE TABLE yelpdata.menus
(
    menuid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restid int NOT NULL,
    FOREIGN KEY(restid) REFERENCES  yelpdata.restaurantdata(restid)
);
CREATE TABLE yelpdata.categories
(
    categoryid int NOT NULL PRIMARY KEY,
    categoryname varchar(255)
);

CREATE TABLE yelpdata.deliverytypes
(
    del_type_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    del_type varchar(100) NOT NULL
);
CREATE TABLE yelpdata.delivery_status
(
    del_status_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    del_status varchar(100) NOT NULL
);
 
CREATE TABLE yelpdata.orders
(
    orderid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Custid int  NOT NULL,
    restid int NOT NULL,
    del_type int NOT NULL,
    del_status int NOT NULL,
    orderdate date NOT NULL,
    ordertime time NOT NULL ,
    FOREIGN KEY(Custid) REFERENCES yelpdata.custprimarydata(Custid),
    FOREIGN KEY(restid) REFERENCES yelpdata.restaurantdata(restid),
    FOREIGN KEY(del_type) REFERENCES yelpdata.deliverytypes(del_type_id),
    FOREIGN KEY(del_status) REFERENCES yelpdata.delivery_status(del_status_id)
);

create unique index orders_index on yelpdata.orders(orderid);

drop table yelpdata.logincredentials;

insert into yelpdata.logincredentials(emailid,user_pwd,usertype) values('admin','admin',1);
select * from yelpdata.logincredentials;
Delete from yelpdata.logincredentials where emailid=undefined;
