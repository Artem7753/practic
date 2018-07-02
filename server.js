let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');

let app = express();

let pool = new pg.Pool({
    port: 5432,
    password: '',
    database: 'blog'
});

pool.connect(((err, connection) => {
    connection.query('select * from test', (err, table) => {
        console.log(table.rows);
    })
}))