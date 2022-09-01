const mysql2 = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');

//creating connection to MYSQL//
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

  Connection.connect(function (err) {
    if (err) throw err;
  });

  module.exports = connection;