const express = require('express');
const app = express();

//middleware
// app.use('/home',(req,res)=>{
//     //console.log(req);
//     res.send('<h1> responce from server</h1>');
//     console.log(res);
// })

//get
app.get('/hi',(req,res)=>{

    res.send('<h1>responce from my route->thakna mna hain</h1>');
})

app.get('/hello',(req,res)=>{
    
    res.send('<h1>How are you</h1>');
})

app.get('/name',(req,res)=>{
    
    res.send('<h1>my name is raja</h1>');
})
app.get('/change',(req,res)=>{
    
    res.send('<h1>I am changed now</h1>');
})












app.listen(8080,()=>{
    console.log("server is running at port 8080");
})