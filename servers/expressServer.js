const express=require ('express');

const app=express();

app.get("/",(req,res)=>{
    res.send("<h2>Home</h2>");
})
app.get("/about",(req,res)=>{
    res.send("<h2>About us</h2>");
})
app.get("/data",(req,res)=>{
    res.json({"name":"Shiv Pratap","course":"B.tech","fee":"130600"});
})


app.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})