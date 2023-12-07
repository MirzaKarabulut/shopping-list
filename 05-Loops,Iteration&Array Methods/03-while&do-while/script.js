let i = 1;

while (i < 5) {
  console.log(i);
  i++;
}

// Loop over array

let j = 0;
let arr = [10, 20, 30, 40];

while (j < arr.length) {
  console.log(arr[j]);
  j++;
}


// Nesting while loops

// while (i <= 5) {
//   console.log('number ' + i);
  
//   let j = 1;
//   while (j < 3) {
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
//   i++;
// }



do {
  console.log('number ' + i);
  i++;
} while (i <= 20)