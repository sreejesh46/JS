/*let firstName = "sreejesh";
let age = 21;
let student = true;

age = age;

console.log("Hello Mr",firstName);
console.log("you are ",age,"years old");
console.log("enrolled:",student);

document.getElementById("p1").innerHTML = "Hello Mr " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "enrolled: " +student;
*/
/*
let age = window.prompt("How old are you");


console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;
console.log("Happy Birthday ! You are ",age,"years old");

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("deleted"); 

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

const PI = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);+

circumference = 2 * PI * radius;

console.log("The circumference is : ",circumference);

*/

//math functions//
/*
let x = 16;


x = Math.sqrt(x);

console.log(x);
*/
function sum(a,b){
    return a + b;
}
console.log(sum(10,30));
// next line is
const sum1 = (a, b) => a + b;

console.log(sum1(5, 8));

const numbers1 = [45, 9, 10, 25];

numbers1.forEach((val) => {
    console.log(val);
})

const over18 = numbers1.filter((val) => {
    return val > 18;
})
console.log(over18);
