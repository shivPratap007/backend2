function downloadContent(url,fn){
    console.log("Starting the download");
    setTimeout(()=>{
        let data="How are you";
        fn(data);
    },5000)
}

function fileMaker(filename,data,fn){
    let f=filename;
    setTimeout(()=>{
        fn(data,filename)
    },5000)
}

downloadContent("www.wikipedia.com",function func(data){
    console.log("This is the printed data"+data);
    fileMaker("shiv",data,function(value,filename){
        console.log(`This data ${value} is being uploaded on the file name ${filename}`)
    })

})
