const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;
area = radius * radius * PI;

console.log(area);

//type coersion
const one = 1;
const two = "2";

let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result);

//Scope
let course = "WDD131"; //global scope
if (true) {
    let student = "Alejandro"; //block scope
    console.log(`${student} is enrolled in ${course}`);
}
console.log(course); //works fine, course is global
console.log(student); //error, student is block scoped