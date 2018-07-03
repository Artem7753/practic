let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');

let app = express();

let pool = new pg.Pool({
    port: 5432,
    password: '',
    database: 'blog'
});

app.get('/data' , (req, res) => {
    pool.connect(((err, connection) => {
        connection.query('select * from post', (err, table) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(table.rows));
            console.log("data sended");
        })
    }));
});

app.get('/post/:id', (req, res) => {
    pool.connect((err, connection) => {
        let id = req.params.id;
        let query = 'select * from post where id =' + id;
        console.log(id);
        connection.query(query, (err, table) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
             res.send(JSON.stringify(table.rows));
            console.log("data sended");
        });
    });
});

app.listen(3000);
