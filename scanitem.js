var AWS=require("aws-sdk");
AWS.config.update({
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
    region: 'us-east-1',
    endpoint:"http://localhost:8000", 

  });
var scan=new AWS.DynamoDB();
  var params={
      TableName:"customer_lists",
      Key:{
          AttributeName:{N:'001'}
      },
  };
  
  scan.getItem(params,function(err,data){
      if(err) console.log(err);
      else console.log(data);
  });