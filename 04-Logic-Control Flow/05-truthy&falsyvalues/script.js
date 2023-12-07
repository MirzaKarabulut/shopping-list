// Falsy Values:
//  false
//  0
//  ''
//  null
//  undefined
//  NaN
// geri kalan her şey doğru

const z = '';
if (z) {
  console.log('this is true');
} else {
  console.log('this is false');
}

const children = 0;
// children bir number diyor
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter your children');
}

// Checking for empty arrays

const posts = [];// boş arrayde truthy
if (posts.length >= 0) {
  console.log('There are some posts here!');
} else {
  console.log('No posts yet!');
}


// Checking for empty object

const user = {};//Object.keys(user) arraya çeviriyor
if (Object.keys(user).length > 0) {
  console.log('Is there a user');
} else {
  console.log('There is no user here');
}

//Loose Equality(===)

console.log(false == 0);//0 zaten false eşit yani true
console.log('' == 0);//0 zaten false eşit yani true