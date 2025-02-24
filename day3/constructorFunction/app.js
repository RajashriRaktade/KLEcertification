// function Details(){
//     this.name ="raja";
//     this.age =20;
//     this.address ="nipani"
// }

// let user = new Details();
// console.log(user.name);

//custom constructor functin
function Details(){
     this.name ="raja";
     this.age =20;
     this.address ="nipani";
     this.description =function(){
        return (`my name is ${this.name},my age is ${this.age}`)
     }
     }
let user =new Details("raja",20,"nipani");

let user1 = new Details("Patti",21,"sidnal");

let user2 =new Details("sammi",22,"kagal");
console.log(user);
console.log(user.description());
console.log(user1);
console.log(user1.description());
console.log(user2);