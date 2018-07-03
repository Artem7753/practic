let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');

let app = express();

let pool = new pg.Pool({
    port: 5432,
    password: '',
    database: 'blog'
});

app.get('/data', (req, res) => {
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

app.get('/delete/:id', (req, res) => {
    pool.connect((err, connection) => {
        let id = req.params.id;
        let query = 'delete from post where id = ' + id;
        connection.query(query);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send('success');
    })
});

app.put('/insert', (req, res) => {
    pool.connect((err, connection) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        let title = req.body.title;
        let description = req.body.description;
        let image = req.body.image;
        let id = null;

        console.log('title :', title, ' description : ', description, ' image : ', image, ' id : ', id);

        connection.query('insert into post values (?,?,?,?)', [id,title,image,description]);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send('success');
    })
})

app.listen(3001);
