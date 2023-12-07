// for (let i = 0; i < 5; i++){
//   console.log('number ' + i);
// }


for (let i = 4; i <= 8; i = i + 2){
  console.log('number ' + i);
}

for (let i = 2; i < 9; i = i * 3){
  if (i === 6) {
    console.log('6 is my lucky number');
  } else {
    console.log('number ' + i);
  }
}


// Nested LOOPS

// for (let i = 1; i < 3; i++){
//   console.log('number ' + i);
  

//   for (let j = 1; j < 5; j++){
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }


// Loops through an array

const names = ['ahmet', 'mirza', 'mahmut', 'ayşe'];

for (let i = 0; i < names.length; i++){
  if (i === 2) {
    console.log(`${names[2]} is the best`);
  }else{
    
    console.log(names[i]);
  }
  
}
