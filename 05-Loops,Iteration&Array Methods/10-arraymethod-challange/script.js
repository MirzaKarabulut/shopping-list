// First Challlange

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter(underAge => underAge.age <= 25)
  .map((underAge)=>({
    name: underAge.firstName + ' ' + underAge.lastName,
    email: underAge.email
  }));
console.log(youngPeople);


// Second Challange

const numbers = [2, -30, 50, 20, -12, -9, 7];



const positiveSum = numbers
  .filter(positive => positive > 0)
  .reduce((acc, cur) => acc + cur);
console.log(positiveSum); // 79



// Third Challanges


const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(upper => upper.charAt(0).toUpperCase()+upper.slice(1))


console.log(capitalizedWords);


