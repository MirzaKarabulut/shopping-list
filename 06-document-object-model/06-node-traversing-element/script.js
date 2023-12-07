// node biraz dumenden boşlukları da texten sayıyor

let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;

output = parent.childNodes[1].textContent;
output = parent.childNodes[3].style.color='red';
output = parent.childNodes[5].innerText='Node baya dumenden';

parent.lastChild.textContent = 'ossuruktan teyyare';


// Parent node

const child = document.querySelector('.child');

output = child.parentNode;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';


// Siblings

const sibling = document.querySelector('.child:nth-child(2)');
output = sibling;
output = sibling.nextSibling;



console.log(output);