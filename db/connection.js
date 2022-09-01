const mysql2 = require('mysql2');
//connect to database
const db = mysql2.createConnection(
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



  module.exports = db;