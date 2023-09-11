import { readFile } from "fs/promises";
import { fileURLToPath } from "url"; // Import the fileURLToPath function it is used to convert the URL into path

// Create a URL object for the "read.html" file relative to the current module's URL
const url = new URL("read.html", import.meta.url); 

console.log(url); // It is an object

// Convert the URL to a file path
const filePath = fileURLToPath(url);
console.log(filePath)//D:\Sanket\jsnode\CRUDinfiles\read.html

const path=url.pathname; //Object ke andar jo pathname hai use aisa url atta hai jo valid nahi hota thats why we use fileURLToPath()
console.log(path)//   /D:/Sanket/jsnode/CRUDinfiles/read.html

// Read the content of the file using the file path
// const data = await readFile(path, {
//     encoding: "utf-8"
// });

// console.log(data);
