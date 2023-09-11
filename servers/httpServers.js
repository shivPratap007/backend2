const http=require("http");
const port=4000

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Home");
    }else if(req.url=="/about"){
        res.end("About");
    }else if(req.url=="/help"){
        res.end("Call me");
    }else{
        res.end("Data not found");
    }
})
server.listen(port,()=>{
    console.log(`Server is running on port number ${port}`)
});