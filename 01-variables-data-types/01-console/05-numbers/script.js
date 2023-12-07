let x;
const num = new Number(5);

x = num.toString();// 5
x = num.toString().length; // 1
x = num.toFixed(3);// 5.00
x = num.toPrecision(2);
x = num.toExponential(2);
x = num.toLocaleString('tr-TR');
 

console.log(x);