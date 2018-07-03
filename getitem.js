var AWS=require('aws-sdk');

AWS.config.update({
    accessKeyId:'dummy',
    secretAccessKey:"dummy",
    region:"us-east-1",
    endpoint:"http://localhost:8000"
});

getitem=new AWS.DynamoDB();

var params={
    TableName:"customer_lists",
    Key:{'HASH':{N:'001'},
},


ProjectionExpression: 'ATTRIBUTE_NAME'
};

getitem.getItem(params,function(err,data){
    if(err){
        console.log("error",err);
    } else{
        console.log("success",data.Item);
    }
});