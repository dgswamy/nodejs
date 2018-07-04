var mysql =require("mysql");

var con =mysql.createConnection({
    host:"192.168.1.164",
    user:"root",
    password:"123456",
    database:"mysql"
    
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
con.end();