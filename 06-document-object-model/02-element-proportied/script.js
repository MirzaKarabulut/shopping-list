 let output;

output = document.all;
output = document.all[9];

output = document.documentElement;
output = document.body;

output = document.head;

output = document.body.children[0];//output = document.all[9]; bu ikisi aynı

output = document.URL;
output = document.characterSet;

output = document.forms[0].className;


output = document.images;
output = document.images[0];

const forms = Array.from(document.forms); //formu arraye çevirdik
forms.forEach((form) => console.log(form));


console.log(output);;
 
