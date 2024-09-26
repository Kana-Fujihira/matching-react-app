create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table cat (
  id int unsigned primary key auto_increment not null,
  url varchar(255) not null unique,
  breed_name varchar(25) not null,
  origin varchar(25) not null,
  temperament varchar(255) not null,
  weight_metric varchar(25) not null
);

