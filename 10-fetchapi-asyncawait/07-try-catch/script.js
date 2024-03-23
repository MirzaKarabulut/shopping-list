// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error ' + error)
// }


function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number.Please enter number!')
  }
}

try {
  const x = double('sldkjfnsfd');
} catch (error) {
  console.log(error);
}