function hello(func,val){
    console.log("Function is passed");
    func(val)

}

hello(function(n){
    console.log("Value is taken from the function1 and passed to the function2")
    console.log(`This is the passed value ${n}`)
},5)