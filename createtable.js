var AWS=require("aws-sdk");

AWS.config.update({
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
    region: 'us-east-1',
    endpoint:"http://localhost:8000", 

  });

  create = new AWS.DynamoDB();

  var params={
      AttributeDefinitions:[
          {
              AttributeName:'001',
              AttributeType:'N'
          },
          {
              AttributeName:'naga',
              AttributeType:'S'
          }
      ],
      KeySchema:[
          {
              AttributeName:'001',
              KeyType:'HASH'
          },
          {
              AttributeName:"naga",
              KeyType:"RANGE"
          }
      ],
      ProvisionedThroughput:{
          ReadCapacityUnits:'1',
          WriteCapacityUnits:'1'
      },

      TableName:"customer_lists",
      StreamSpecification:{
          StreamEnabled:false
      }
  };

  create.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });