const express = require('express');
const db = require('./public/connection');
const consoleTable = require('console.table');
const util = require('util');
const Connection = require('mysql2/typings/mysql/lib/Connection');
const { Console } = require('console');
const { default: inquirer } = require('inquirer');

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '12Cribben!',
      database: 'employee'
    },
    console.log('Connected to the employee database.')
  );
Connection.query = util.promisify(connection.query);
Connection.connect(function (err) {
    if (err) throw err;
    initialAction();
  });

  Console.table(
  "/n---------WELCOME TO YOUR EMPLOYEE_LOG--------/N"
  )


  //initial questions//
  const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'Where would you like to Start',
            choices: [
                'VIEW EMPLOYEES',
                'VIEW DEPARTMENTS',
                'VIEW ROLES',
                'ADD EMPLOYEES',
                'ADD ROLES',
                'UPDATE EMPLOYEE ROLES',
                'LEAVE'
            ]
        });
        switch (answer.action) {
            case 'VIEW EMPLOYEES':
                employeeView();
                break

            case 'VIEW DEPARTMENTS':
                departmentView();
                break
            
            case 'VIEW ROLES':
                roleView();
                break

            case 'ADD EMPLOYEES':
                employeeAdd();
                break

            case 'ADD DEPARTMENTS':
                departmentAdd();
                break

            case 'ADD EMPLOYEE ROLES':
                roleAdd();
                break
            
            case 'UPDATE EMPLOYEE ROLE':
                employeeUpdate();
                break

            case 'Finished':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initialAction();
    };
  }



// Default response for any other request (Not Found
app.use((req, res) => {
    res.status(404).end();
  });
  
  // Start server after DB connection
  db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });









