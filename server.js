
const express = require("express");

//server creation
const app = express();
let port = '5000'

app.listen(port,function(){
    console.log(`server is listening on port ${port}`);
});

app.use(express.json());

let user = {}

//get request
//client <- server
app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/user',(req,res)=>{
    res.send(user)
})

//post request
//client -> server

app.post('/user',(req,res)=>{
      user = req.body;
      console.log(req.body);
      res.send("data has been added successfully")
})

//patch request
//for updating
app.patch('/user',(req,res)=>{
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.json(user)
})

//delete request
//for deleting
app.delete('/user',(req,res)=>{
    user={};
    res.json(user);
})