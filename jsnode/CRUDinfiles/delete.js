const fs=require("fs");
const path=require("path");

const filePath=path.join(__dirname,"renamed.txt")

fs.unlinkSync(filePath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("File has been deleted")
})