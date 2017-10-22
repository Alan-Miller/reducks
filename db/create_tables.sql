create table yoozers (
  id serial primary key,
  auth_id text,
  name varchar(40)
);

insert into yoozers 
(auth_id, name)
values
('secret_authID_321', 'Nathaniel'),
('special_authID_789', 'Jill');