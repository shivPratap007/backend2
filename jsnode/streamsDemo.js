const fs=require("fs");
const fileStream=fs.createReadStream(__dirname+"/process.js");//It is used to read the data form the file
let outputStream=process.stdout;//It is used to write the data into the file
fileStream.pipe(outputStream);//It establishes a connection between reading and writing creates a pipe
