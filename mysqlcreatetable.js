var mysql =require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"123456",
    database:"mysql"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    // two ways we can right query
    con.query("create table loginform(username varchar(255),password varchar(255))",function(err,result);
    if(err) throw err;
    console.log("table created");
})