var mysql=require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"123456"
});

con.connect(function(err){
    if(err) throw err;
    con.query("create database testdb",function(err,result){
        if(err) throw err;
        console.log("db created");
    })
})