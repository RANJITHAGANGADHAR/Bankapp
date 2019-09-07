const express= require('express');
const app=express();
const path=require('path');

app.arguments(express.static(__dirname +'/dist/angular-project5'));
app.listen(process.env.PORT||8080);
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/angular-progect5/index.html') );
})
console.log("console lietsting");