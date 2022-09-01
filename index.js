const inquirer = require('inquirer');
const connection = require('./public/connections');
const { deleteRolePrompt, deleteDepartmentPrompt } = require('./public/prompt');
const prompt = require('./public/prompt');


function firstPrompt() {
    inquirer.prompt(prompt.firstprompt).then(function ({ task }) {
        switch (task) {
            case "View Employees":
                viewEmployee();
                break;
            case "View Employees By Manager":
                viewEmployeeByManager();
                break;
            case "View By Department":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Department Budget":
                viewDepartmentBudget();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Employee Manager":
                updateEmployeeManager();
                break;
            case "Remove Employee":
                deleteEmployee();
                break;
            case "Remove Role":
                deleteRolePrompt();
                break;
            case "Romove Department":
                deleteDepartmentPrompt();
                break;
            case "Exit":
                console.log(
                    `All Finished`
                );
                connection.eng();
    }
});
}
