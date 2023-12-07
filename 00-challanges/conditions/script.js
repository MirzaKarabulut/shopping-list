// 1.level

/////
const age = 11;
  
if (age >= 18) {
  console.log('You are old enough to drive');
} else {
  console.log(`You are left with ${18 - age}  years to drive.`);
}


//////
const myAge = 21;
const yourAge=21;
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge === myAge) {
  console.log('We are at same age');

} else {
  console.log(`I am ${myAge - yourAge} years older than you`);
}


/////
const evenNumber = 'It is a even number';
const oddNumber = 'It is a odd number';

function allNumber(item){

   if (item % 2 === 0) {
         console.log(evenNumber);
         } else if (item % 2 === 1) {
     console.log(oddNumber);
  }
}
allNumber(342346);



// 2.level


////

let grades = 56;

switch (true) {
  case (grades >= 80 && grades <= 100):
     grades = 'A';
    break;
  case (grades >= 70 && grades < 80):
     grades = 'B';
    break;
  case (grades >= 60 && grades < 70):
     grades = 'C';
    break;
  case (grades >= 40 && grades < 60):
     grades = 'D';
    break;
  case (grades >= 0 && grades < 40):
     grades = 'E';
    break;
  default:
   grades = 'Invalid Score';
}

console.log(`Score: ${grades}`);



// 3. Level

/////

const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();

