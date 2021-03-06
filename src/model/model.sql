-- we're recording the structure of our sql model

-- we create a todo table
CREATE TABLE todos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TASK VARCHAR(50) NOT NULL,
    decription VARCHAR(1000)
    is_done BOOLEAN
);

-- get summary of all the items
select id, task, is_done from todos;

-- get the details of a single item by id

select id, task, description, is_done from todos where id = ?;

-- delete a todo given an id 
delete from todos where id = ?;

-- create a new todo
insert into todos(task, description) values (?,?);

-- update a todo given its id
update todos set task = ?, description = ?, is_done = ? where id = ? ;







