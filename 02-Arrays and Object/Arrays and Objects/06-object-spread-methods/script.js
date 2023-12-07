let x;

const todo = new Object();

todo.id = 7;
todo.fisrtName = 'Jason';
todo.lastName = 'Totthem';
todo.hasOwnHouse = true;

x = todo;

//nesting
const person = {
  address: {
    coords: {
      lat: 2342.345345,
      lng: -789.1212153,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj4 = { ...obj1, ...obj2 };

const todos = [
  { id: 1, name: 'Go to the Mall' },
  { id: 2, name: 'I need the workout' },
  { id: 3, name: 'Get some milk' },
];

x = todos[0].name;

x = Object.keys(todo);
x = Object.values(todo);
x = todo.hasOwnProperty('hasOwnHouse');


console.log(x);