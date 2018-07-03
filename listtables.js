var AWS=require("aws-sdk");

AWS.config.update({
    accssKeyId:'dummy',
    secretAccessKey:"dummy",
    region:'us-east-1',
    endpoint:"http://localhost:8000" 

});

list=new AWS.DynamoDB();

list.listTables({Limit:10},function(err,data){
    if(err) {
        console.log("error",err.code);

    } else {
        console.log("table names are ", data.TableNames);
    }
});