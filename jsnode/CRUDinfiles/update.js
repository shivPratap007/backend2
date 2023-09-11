const fs=require("fs");
const path=require("path");

const newPath=path.join(__dirname,"renamed.txt")


fs.appendFile(newPath,"hello",(err)=>{
    if(err){
        console.log(err)
    }
})