function greet()
{
    console.log("Hello");
}
greet();

function greet(name){
    console.log("Hello"+name);
}
greet("Manish");
greet("Amit");


function add(a,b){
    return a+b;
}
let result = add(10,20);
console.log(result);

const sayHi = function(){
    console.log("Hi");
};
sayHi();