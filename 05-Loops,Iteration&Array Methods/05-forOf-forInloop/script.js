//  forOF
// Loop throughs an array
// const names = ['brad', 'john', 'alex', 'alexa'];

// for (const name of names) {
//   console.log('names '+ name);
// }


// Loop over strings

const str = 'hello moon';

for (const letter of str) {
  if (letter === 'o') {
    console.log(letter +' is the letter o');
  } else {
    console.log(letter);
  }
}


// Loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key,value);
}


// for In

const colorObj = {
  color1: 'blue',
  color2: 'purple',
  color3: 'pink',
  color4: 'red'
};
for (const key in colorObj) {
  console.log(key,colorObj[key]);
}


