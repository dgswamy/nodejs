var AWS=require('aws-sdk');

AWS.config.loadFromPath("./config.json");

write=new AWS.DynamoDB();

var params={
    TableName:"customer_lists",
    Item:{
        "customer_id":{N:'001'},
        "cusotmer_name":{S:"naga"}
    }
};

write.putItem(params,function(err,data){
    if(err){
        console.log("error",err);

    } else{
        console.log("success ",data);
    }
})