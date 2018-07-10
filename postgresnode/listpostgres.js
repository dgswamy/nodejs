var pg =require('pg');

var client=new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'testdb',
    password:'123456',
    port:5432
});

client.connect();

client.query("select * from login;",(err,res)=>{
    console.log(err,res)
    client.end();

});


