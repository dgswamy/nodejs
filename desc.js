var AWS=require('aws-sdk');

AWS.config.update({
    accessKeyId:"dummy",
    secretAccessKey:'dummy',
    region:"us-east-1",
    endpoint:"http://localhost:8000" 
});

desc=new AWS.DynamoDB();

var params={
    TableName:"customer_lists"
};

desc.describeTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Table.KeySchema);
    }
  });