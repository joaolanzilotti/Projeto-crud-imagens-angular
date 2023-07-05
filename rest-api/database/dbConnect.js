const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_galeria'
});
module.exports = conexao;