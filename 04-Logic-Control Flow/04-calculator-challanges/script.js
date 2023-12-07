function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator');
    
  }
  console.log(result);
  return result;
}

calculator(5,2,'*');