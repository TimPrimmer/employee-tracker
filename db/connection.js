const mysql = require('mysql2');

// Setting up to use environment variables so we dont expose our password on github
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  },
  console.log('Connected to the company database.')
);

module.exports = db;