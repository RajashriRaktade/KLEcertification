let fs =require('fs');
// //perform crud op
//let data ="hii raja";

// //task 1 create file and write into it
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created successfully");
// })

//way2
//fs.writeFileSync('demo.txt',data);

//read a file
//let fileread = fs.readFileSync('demo.txt');
//console.log(fileread.toString());

//update a file
//fs.appendFileSync('demo.txt','\n Hello raja');

//delete data 
//fs.unlinkSync('demo.txt');

//practice
let data1="My name is Raja";
//writefile
fs.writeFileSync('demo.txt',data1);
//read
let readfile =fs.readFileSync('demo.txt');
console.log(readfile,toString());
//update
fs.appendFileSync('demo.txt','\n Hello Raja');
//delete data only
fs.truncateSync('demo.txt');
