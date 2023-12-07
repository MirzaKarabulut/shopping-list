const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
const meyve = ['elma', 'armut', 'çilek'];

//fruits.push(berries);

//x = fruits[3][0];

const allFruits = [fruits, berries,meyve];

x = allFruits[2][1];

x = fruits.concat(meyve);

// Spread Operator(...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7, 8]];
x = arr.flat();

x = Array.isArray(fruits);

console.log(x);


