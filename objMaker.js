var str1="name:Shiv Pratap,course:B.tech,price:130600";


function objMaker(str1){
    var str2=str1.split(",");
    var data=[]
    var obj={}
    for(let i=0;i<str2.length;i++){
        var str3=str2[i].split(":")
        data.push(str3[0]);
        data.push(str3[1])
    }

    for(let i=0;i<data.length;i++){
        if(i%2==0){
            obj[data[i]]
        }else{
            obj[data[i-1]]=data[i]
        }
    }
    return obj
}
console.log(objMaker(str1))