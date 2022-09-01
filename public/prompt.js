module.exports = {
    firstPrompt: {
        type: 'list',
        name: 'task',
        message: 'Please Make a Selection:',
        choices: [
            "View Employees",
            "View Employees by Manager",
            "View Employees by Departments",
            "View Department Budget",
            "View Roles", 
            "Add Employee",
            "Add Department",
            "Add Role", 
            "UPDATE Employee Manager",
            "UPDATE Employee Role",
            "Remove Employee",
            "Remove Department",
            "Remove Role",
            "Finish",
        ],
    },


 //Employee By Manager//
    viewManagerPrompt: (managerChoices) => [
        {
            type: "list",
            name: "managerId",
            message: "Which Manager would you like to choose?",
            choices: managerChoices,
        },
    ],

//Employee by Department//
    departmentPrompt: (departmentChoices) => [
        {
            type: "list",
            name: "departmentId",
            message: "Choose your department",
            choices: departmentChoices,
        },
    ],

    //Adding Employee//
    insertEmployee: (departmentArray, roleArray, managerArray) => [
        {
            name: "firstName",
            type: "input",
            message: "Input Employees First name:",
        },
        {
            name: "lastName",
            type: "input",
            message: "Input Employees Last name:",
        },
        //department //
        {
            name: "department",
            type: "list",
            message: "Choose employee department",
            choices: departmentArray,
        },
        //employee role//
        {
            name: "role",
            type: "list",
            message: "Select employee role",
            choices: roleArray,
        },
        //employee Manager//
        {
            name: "manager",
            type: "list",
            message: "Who is your employee's Manager?",
            choices: managerArray,
        },
    ],

    //Add Role//
    insertRole: (departmentChoices) => [
        {
            type: "input",
            name: "roleTitle",
            message: "Title of the role",
        },
        //Role Salary 
        {
            title: "input",
            name: "roleSalary",
            message: "Salary of the role",
        },
        //Role Department
        {
            type: "list",
            name: "departmentId",
            message: "What department?",
            choices: departmentChoices,
        },
    ],

    //update prompts//
updateRole: (employees, job) => [
    {
        name: "update",
        type: "list",
        message: "Which employee do you want to update?",
        choices: employees,
    },

    //changing role//
    {
        name: "role",
        type: "list",
        message: "Which role do you want for your employee?",
        choices: job,
    },
],

//updating manager//
updateManager: (employees) => [
    {
        name: "update",
        type: "list",
        message: " Which employee are you updating the manager?",
        choices: employees,
    },
    {
        name: "manager",
        type: "list",
        message: "Who is the new manager?",
        choices: employees,
    },
],

//Deleting employee//
deleteEmployeePrompt: (deleteEmployeeChoices) => [
    {
        type: "list",
        name: "employeeId",
        message: "Who are you deleting?",
        choices: deleteEmployeeChoices,
    },
],

//Deleting Department//
deleteDepartmentPrompt: (deleteDepartmentChoices) => [
    {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to remove?",
        choices: deleteDepartmentChoices,
    },
],

    //Deleting Role//
    deleteRolePrompt: (deleteRoleChoices) => [
        {
            type: "list",
            name: "roleId",
            message: "Which role would you like to remove?",
            choices: deleteRoleChoices,
        },
    ],
};
