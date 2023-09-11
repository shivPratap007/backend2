const fs=require("fs");
const path=require("path");
// Creating the file paths
const oldPath=path.join(__dirname,"create.txt");
const newPath=path.join(__dirname,"renamed.txt"); // newPath = dirname+new file name

//writing the rename function

fs.rename(oldPath,newPath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`The file name changed from ${filenameGenerator(oldPath)} to this ${filenameGenerator(newPath)}`)
})

// filenameGenerator a function which gives the file name and accepts the path generated from the dirname which contains only \\
function filenameGenerator(path){
    let ar=path.split("\\");
    let fileName=ar[(ar.length)-1];
    return fileName;
}
