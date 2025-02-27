let express = require('express');
const app =express();

// app.get('/Dog',(req,res)=>{
//     res.send('<h1>Hi doggy</h1>');
// })

// app.get('/cat',(req,res)=>{
//     res.send('<h1>Hey cat</h1>');
// })

// app.get('/monkey',(req,res)=>{
//     res.send('<h1>Hey monkey</h1>');
// })
app.get('/animal/:anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.anything);
    const {anything}=req.params;
    res.send(`<h1>I am ${anything}</h1>`);
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name} =req.query;
    res.send(`<h1>my query is ${name}</h1>`);
})












app.listen(8080,()=>{
    console.log("Server is connected to  port 8080");
})