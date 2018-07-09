var pg=require('pg');

var client=new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'workdb',
    password:'123456',
    port:5432
});

client.connect();

//client.query("create table if not exists login(id serial primary key,email varchar(255),password varchar(255));",(err,res)=>{
  //  console.log(err,res);
    
client.query("insert into login(id,email,password) values('001','naga@email.com','123456');",(err,res)=>{
    console.log(err,res);
    client.end();;
});
//});