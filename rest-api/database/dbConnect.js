const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'mysqlazurejp.mysql.database.azure.com:3306',
    user: 'azure',
    password: 'Bancojp123@',
    database: 'db_galeria'
});