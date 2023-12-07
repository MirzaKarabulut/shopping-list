function addTurkishLiraSign(value) {
  return '₺' + value;
}

console.log(addTurkishLiraSign(400));


//function expression

const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(150));