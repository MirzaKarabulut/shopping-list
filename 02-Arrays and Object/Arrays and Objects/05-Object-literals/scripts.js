const person = {
  name: 'Jason',
  age: '27',
  isAdmin: 'true',
  adress: {
    street: 'Dönmez Street',
    state: 'Çirçir State',
    city:'Istanbul',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.adress.city;
x = person.hobbies[0];

person.name = 'Lebron';
person['isAdmin'] = false;

delete person.age;

person.hasMoney = true;  //içeri veri ekliyoruz

person.greet = function () {
  console.log(`Hello,my name is ${this.name}.`);
};

person.greet();

x = person;
console.log(x);