-- create  a table
CREATE TABLE IF NOT EXISTS emp_registration(
emp_id INT (6),
email_id VARCHAR(255) PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name  VARCHAR(255)NOT NULL,
local_addresss VARCHAR(100) ,
Phone VARCHAR(15),
permanent_address VARCHAR(100),
emergency_contact VARCHAR(15));

-- to show all tables;
show tables;

-- to describe table
describe emp_registration
