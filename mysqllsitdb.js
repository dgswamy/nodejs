var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"123456"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("show databases",function(err,result){
    });    
    
});
con.end();