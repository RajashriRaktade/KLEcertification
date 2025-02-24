let promise = new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function(){
        //let data= "promise wil be resolved, data mil gaya";
        //resolve(data);
        let err='promise is rejected';
        reject(err);
},2000)
})

promise.then(function(data){
    console.log(data);
}).catch(function(err){

    console.log(err);  
})