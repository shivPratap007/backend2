function mapper (ar,func){
    let val;
    let array=[];
    for(var i=0;i<ar.length;i++){
         val=func(ar[i]);
         array.push(val)
    }
    return array;
}
let result=mapper([1,2,3],function(n){
    return n*n;
})
console.log(result)