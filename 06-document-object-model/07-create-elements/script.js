// Elementi kendimiz oluşturacaz

const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-Element';
div.setAttribute('title', 'My Element');


const text = document.createTextNode('Hello World');
div.appendChild(text);

// divimizi ulnin içine append edicez

document.querySelector('ul').appendChild(div);

console.log(div);