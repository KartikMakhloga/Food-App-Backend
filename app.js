//npm init -y
//npm instal express
//npm instal nodemon


const express = require("express");

//server creation
const app = express();
let port = '8000'

app.listen(port,function(){
    console.log(`server is listening on port ${port}`);
});


//Types of request -> get, post, put, delete

app.get('/home',(req,res)=>{
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.sendFile('./views/index.html',{root:__dirname});
})

let obj={
    "name": "Kartik",
}

app.get('/user',(req,res)=>{
    res.json(obj)
})

app.get('/',(req,res)=>{
    res.send('home page')
})