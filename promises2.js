function downloadData(url){
    return new Promise((resolve,reject)=>{
        console.log("Starting the download");
        setTimeout(()=>{
            var data="Hello World";
            resolve(data);
            console.log("Data downloaded successfully");
        },6000)
    })
}

function creatingFile(filename){
    return new Promise((resolve,reject)=>{
        console.log("Creating the file");
        setTimeout(()=>{
            let data="Shiv.js";
            resolve(data)
            console.log("file created successfullyl");
        },6000)
    })
}

function addingContent(data){
    return new Promise((resolve,reject)=>{
        console.log("Adding the content");
        setTimeout(()=>{
            let v="Data is "+data;
            resolve(data)
        },6000)
    })
}

// downloadData("google.com")
// .then(function dataDownload(value){
//     console.log(value);
//     return creatingFile(value)
// })
// .then(function fileCreation(value){
//     console.log(value)
//     return addingContent(value)
// })
// .then(function contentAddition(value){
//     console.log(value)
// })
// .catch(function error(err){
//     console.log(err)
// })

async function fetchingData(){
    let downloadedData=await downloadData("google.com");
    console.log(downloadedData);
    let creatingtheFile=await creatingFile(downloadedData);
    console.log(creatingtheFile);
    let addingContentInFile=await addingContent(creatingtheFile);
    console.log(addingContentInFile);
    
}

fetchingData()
