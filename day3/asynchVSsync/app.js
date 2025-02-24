//synch
// console.log("first");
// console.log("second");
// console.log("third");


//async=set timeout()
// console.log("first");

// setTimeout(function(){
//    console.log("Print after 2sc");
//  },2000)

// setTimeout(function(){
//     console.log("print after 4sec");
// },4000)
// console.log("third");

//set-interval
// setInterval(function(){
//     console.log("It will run after 2 sec")
// },2000)

let count=0;
let intervalID = setInterval(function(){
    count++;
    console.log(`my count is ${count}`);
    
    if (count ==10){
        clearInterval(intervalID);
        console.log('task completed');
    }
},1000)