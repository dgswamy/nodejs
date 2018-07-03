var mysql=require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query("drop database mydb",function(err,result){
        if(err) throw err;
        console.log("database created");
    });
    con.end();
});