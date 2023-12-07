
// document.getElementById();
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));



// set attributes
document.getElementById('app-title').title = 'shopping-list';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
console.log(title);

// Get/change content

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello World';// yukarıdakiyle aynı ama daha çok kullanılıyor

title.innerHTML = '<strong>Shopping List</strong>';



// Change Styles

title.style.color = 'blue';
title.style.backgroundColor = 'yellow';
title.style.padding = '10px';
title.style.borderRadius = '100px';



// document.querySelector()


console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('li:nth-child(3)'));

const change = document.querySelector('li:nth-child(3)');

change.innerText='BANANA'
change.style.color = 'yellow';
change.style.opacity = '0.4';



// Use these methods on other elements

const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'brown';

