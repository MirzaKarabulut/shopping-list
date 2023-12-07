const arr = [21, 12, 46, 34, 65];

arr.push(100);

arr.pop();

arr.unshift(99);
arr.shift();

//arr.reverse();

x = arr.includes(20);

x = arr.indexOf(23423);

x = arr.slice(1, 4);

x = arr.slice(1, 4).reverse().toString().charAt(1);


console.log(x);