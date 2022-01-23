const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localHost',
  user: 'root',
  password: 'Trybers123',
  database: 'modelExample',
  // port: 3306 é o default
});

module.exports = connection;