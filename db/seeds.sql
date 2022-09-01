USE employee;

/*DEPARTMENT*/
INSERT INTO department (name)
values ("Sales");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Legal");

/*creating roles */
/*Sales Team*/
INSERT INTO role (title,salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title,salary, department_id)
VALUES("Sales Associate", 75000, 1);
/*ENGINEERING*/
INSERT INTO role (title,salary, department_id)
VALUES("Head Engineer", 125000, 2);
INSERT INTO role (title,salary, department_id)
VALUES("Software Engineer", 95000, 2);
/*Accounting*/
INSERT INTO role (title,salary, department_id)
VALUES("Accounting Manager", 100000, 3);
INSERT INTO role (title,salary, department_id)
VALUES("Accountant", 65000, 3);
/*legal team*/
INSERT INTO role (title,salary, department_id)
VALUES("Legal Team Lead", 200000, 4);
INSERT INTO role (title,salary, department_id)
VALUES("Lawer", 250000, 4);

/*Employees*/
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "C", 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Andrea", "J", 1, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Johnson", 2, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "John", 2, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Lauri", "Thomas", 3, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)   
VALUES ("Ralph", "Team", 3, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Sees", 4, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("LEGAL", "Law", 4, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("SALES", "Sale", 5, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Monica", "DoRights", 5, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)  
VALUES ("Crystal", "DoneIT", 6, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ("Raleigh", "SC", 6, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Santa", "Clause", 7, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)  
VALUES ("Easter", "Bunny", 7, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ("Chicken", "Run", 8, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Zephyr", "Hills", 8, null);