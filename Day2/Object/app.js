//object
//let person= {
    //name : 'raja',
    //age : 20,
    //favcolor : 'red'
//}
//console.log(person);
//console.log(person.name);
//console.log(person.age);
//console.log(person['age']);

//change prop. in an obj
//update
//person.name="raja raktade";
//console.log(person);

//add new property
//person.gender="female";
//onsole.log(person);

//delete propery
//delete person.favcolor;
//console.log(person);

//advace obj
let person= {
    name : 'raja',
    age : 20,
    favcolor : 'red',
    fun: function print(){
        return (`my name is ${this.name} and my age is ${this.age}`);
    },
    newObj:{
        gender: "female",
        address: "nipani",
    }
}
//console.log(person.fun());
console.log(person.newObj.address)