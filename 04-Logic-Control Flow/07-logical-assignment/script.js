// ||=

let a = 0;

a ||= 10;
console.log(a);


// &&=

let b = 10;

if (b) {
  b = 20;
}

b &&= 20;
console.log(b);


// ??=
