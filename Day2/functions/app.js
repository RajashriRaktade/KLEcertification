//fuctions

function sum(a,b){
    //console.log("this is my sum function")
    let sum=a+b;
    return (`my sum is ${sum}`);
}
//console.log(sum(2,4));

//way 2-first class function
let ans = function(){
    return (" i am print ka function");
}
console.log(ans());