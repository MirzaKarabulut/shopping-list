
//Hocanınki
const getCelsius1 = (fahrenheit) => {
  const celcius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celcius);
};//kusuratı yazmamak için

console.log(getCelsius1(50));


//Benimki
function getCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 5 / 9;
}
console.log(`The temputure is  ${getCelsius(270)} \xB0C`);


//Benimki AIdan yardım aldım
const minMax = (arr)=> {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}
console.log(minMax([2, 3453, 6, 61, 177, 890]));

//Benimki
((length, width ) => {
  const area = length * width;
  const output = `The area of a rectangle with length of ${length} and width of ${ width } and ares is ${ area }`
  console.log(output);
})(5,7)


function first() {
  console.log('hi1'); 
  second();
}
function second() {
  console.log('hi2');
  third();
}
function third() {
  console.log('hi3');
}
first();

