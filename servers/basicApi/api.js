const express=require("express");
const bodyParser=require("body-parser");
const app=express();
let ar=[];
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middlewares1;
function middleware1(req,res,after){
    console.log("Middleware1 is working");
    after();
}

// Middleware2
function middleware2(req,res,next){
    console.log("Middleware2 is working");
    next();
}

// Applying the middleware1 for every route
app.use(middleware1);



app.get("/home/:id",middleware1,middleware2,(req,res)=>{
    console.log(req.params.id);
    let result=[];
    result=ar.filter(value=>{
        return value.id===req.params.id.toString();
    })
    console.log(result);
    res.send(result)
})

app.post("/home",(req,res)=>{
    res.send("Are you getting the response");
    console.log(req.body);
    ar.push({"id":req.body.id,"topic":req.body.topic,"destination":req.body.des})

})

app.listen(4000,()=>{
    console.log("app is running on 4000 port");
})
