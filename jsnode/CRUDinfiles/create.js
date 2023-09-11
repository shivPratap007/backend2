const fs=require("fs");
const path=require("path");
let newPath=path.join(__dirname,"create.txt")
let content="This is the file created from the fs module";

fs.writeFile(newPath,content,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File has been created at:"+ newPath);
})
  


