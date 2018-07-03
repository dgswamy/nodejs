var AWS=require("aws-sdk");

AWS.config.update({
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
    region: 'us-east-1',
    endpoint:"http://192.168.1.57:8000", 

  });

var ddb=new AWS.DynamoDB();

var params={
   

};

ddb.listTables(params,function(err,data){
    if(err) console.log(err,err.stack);
    else console.log(data);
})