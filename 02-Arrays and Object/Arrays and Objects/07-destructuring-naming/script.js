const firstName = 'Allice';
const lastName = 'Greedy';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'something going bad',
  user: {
    name: 'Alex',
  },
};

const { id,title, user } = todo;

console.log(id, title, user.name);

//Destructure arrays
const numbers = [12, 45, 78, 35];

const [first, second, ...rest] = numbers;


console.log(first,second,rest);
