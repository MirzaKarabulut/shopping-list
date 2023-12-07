if (true) {
  console.log('this is true');
}
if (false) {
  console.log('this is true');
}

let x = 10;
let y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
}

if (x !== y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

//Block scope yani z bloğun kapsamında dışarda çalışmaz
if (x !== y) {
  const z = 20;
  console.log(z);
}
