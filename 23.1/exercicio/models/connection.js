const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localHost',
  user: 'root',
  password: 'Trybers123',
  database: 'Students',
});

module.exports = connection;
