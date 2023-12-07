// && - yanlış önerme varsa ilk yanlış önermeyi döndürür,hepsi doğruysa son önermeyi  döndürür

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 &&  20;
a = 10 && '' &&  0 &&  20;

console.log(a);


const posts = ['post1','post2'];

posts.length > 0 && console.log(posts[0]); //yanlışı döndurdu


// || ilk doğruyu döndurur veya son yanlışı döndurur

let b;

b = 10 || 20;
b = 10 || 20 || 0;
b = '' || 0 ||  NaN;


console.log(b);


// ?? sol taraf null,undefined ve trueysa sağı döndurur değilse solu

let c;

c = null ?? 10;
c = 0 ?? 10;

console.log(c);