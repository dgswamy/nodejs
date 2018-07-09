var mysql=require('mysql');

var conneciton=mysql.createConnection({
    host:'localhost',
    username:'root',
    password:'123456',
    insecureAuth:true
});

conneciton.connect(function(err){
    if(err) throw err;
    console.log("connected");
    conneciton.query("create database workdb",function(err,result){
        if(err) throw err;
        console.log("db created");
    });
    
});