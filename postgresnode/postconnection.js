var pg =require('pg');

var client=new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'workdb',
    password:'123456',
    port:5432
});

client.connect()

client.query("select * from users",(err,res)=>{
    console.log(err,res);
    client.end();
});
