const {readFile} = require("fs");
const path=require("path");

const filePath=path.join(__dirname,"read.html")

// readFile(filePath,"utf-8",(err,file)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(file)
//     }
// })

let data=await readFile(filePath,{encoding:"utf-8"});
console.log(data)