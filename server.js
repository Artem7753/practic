let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let pgSession = require('connect-pg-simple')(session);

let app = express();

let pool = new pg.Pool({
    port: 5432,
    password: '',
    database: 'blog'
});
let sid = false;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
//app.use(cookieParser());
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(session({
    store: new pgSession({
      pool : pool,                // Connection pool
      tableName : 'session'  
    }),
    secret: 'topsecret',
    resave: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  }));

app.get('/data', (req, res) => {
    pool.connect(((err, connection) => {
        connection.query('select * from post', (err, table) => {
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.send(JSON.stringify(table.rows));
        });
        connection.release();
    }));
    console.log('request data');
});

app.get('/post/:id', (req, res) => {
    pool.connect((err, connection) => {
        let id = req.params.id;
        let query = 'select * from post where id =' + id;
        console.log(id);
        connection.query(query, (err, table) => {
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.send(JSON.stringify(table.rows));
            console.log("data sended");
        });
        connection.release();
    });
    console.log('request post');
});

app.get('/delete/:id', (req, res) => {
    pool.connect((err, connection) => {
        let id = req.params.id;
        let query = 'delete from post where id = ' + id;
        connection.query(query);
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.send('success');
        connection.release();
    });
    console.log('request delete');
});

app.post('/insert', (req, res) => {
    pool.connect((err, connection) => {
        if(req.body){
            let body = JSON.parse(req.body);
        let { title, description, image, id = null } = body;
        connection.query('select id from post order by id desc limit 1', (err,table)=>{
            id = 1 + table.rows[0].id;
            let query = `insert into post values (${id},'${title}','${image}','${description}')`;
            console.log(query);
            console.log('title :', title, ' description : ', description, ' image : ', image, ' id : ', id);
            connection.query(query ,(err, table) => console.log(err));
        });
        connection.release();
      
       
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.send('success');
        }
    });
    console.log('request add new post');
});


app.post('/user', (req, res) => {
    console.log('request');
    pool.connect((err, connection) => {
        let body = JSON.parse(req.body);
        let { login, password} = body;
        let query = `select * from users where login = '${login}'`;
        connection.query(query, (err, table) => {
            console.log(table.rows[0].password);
            if(table.rows[0].password == password){
                console.log('ok!');
                req.session.userName = login;
                req.session.admin = table.rows[0].admin;
                sid = req.session.id;
                console.log(req.session);
            }
        });
       
        console.log('2 - ',req.session);
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
        res.setHeader("Access-Control-Allow-Credentials", "true");
         res.send('success');
         connection.release();
    });
    console.log('request autorization');
});

app.get('/check', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if(sid){
        let query = `select * from session where sid = '${sid}'`;
        pool.connect((err, connection) => {
            connection.query(query, (err, table) => {
                
                res.send(JSON.stringify(table.rows[0].sess));
                console.log("data checked");
                console.log(table.rows[0].sess);
            });
            connection.release();
        });
    }
    else  res.send(JSON.stringify({})); 

    console.log('request check');
    
})



app.get('/lastId', (req, res) => {
    pool.connect(((err, connection) => {
        connection.query('select id from post order by id desc limit 1', (err, table) => {
            console.log(err);
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.send(JSON.stringify(table.rows));
            console.log("data sended");
        });
        connection.release();
    }));
});


app.listen(3000);
