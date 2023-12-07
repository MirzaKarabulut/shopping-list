let x;
let d = new Date();

x = d.toString();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDay() ;
x = d.getHours();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

x = Intl.DateTimeFormat('tr-TR').format(d);


console.log(x);