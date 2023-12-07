// Default Params

function registerUser(user = 'Bot') {
  return user + ' is registered.';
}

console.log(registerUser());

// Rest Params

function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Object as Params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user={
  id:1,
  name:'Mahmut',
};

console.log(loginUser(user));

console.log(loginUser(
  {
  id: 2,
  name:'Sadik'
}
));


// Arrys as params

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  //bura bize rastgele bir sayı verdi en fazla 7 olabilir çunku arrayın uzunluğu o kadar

  const item = arr[randomIndex];
  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8]);





