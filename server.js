
const express = require("express");

//server creation
const app = express();
let port = '5000'

app.listen(port,function(){
    console.log(`server is listening on port ${port}`);
});

let user = {}

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/user',(req,res)=>{
    res.send(user)
})