
//Arow functions syntax
const sum = (a, b) => {
  return a + b;
}
console.log(sum(3, 4));


//Implicit return
const subtract = (a, b) => a - b;
console.log(subtract(6, 5));



//Arrow function with one parameter and without parenthesis
const double = a => a * 10;
console.log(double(2));



//Returning Object
const createPerson = name => ({
  name:'Mirza'
});

console.log(createPerson());


//Arrow function in a callback

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(`The number is ${number}`))
