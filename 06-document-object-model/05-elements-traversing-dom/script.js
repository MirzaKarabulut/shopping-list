// Get child elements
let output;

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;//Child 2

output = parent.children[1].className;// child

output = parent.children[1].nodeName;// DIV

parent.children[1].style.color = 'red';
parent.firstElementChild.innerText = 'CHILD ONE';


// Get parent elements from a child

const child = document.querySelector('.child');
output = child.parentElement;


child.parentElement.style.border = '10px solid';
child.parentElement.style.padding = '10px';


// Siblings Elements

const siblings = document.querySelector('.child:nth-child(2)');
output = siblings;
output = siblings.nextElementSibling;

siblings.nextElementSibling.style.color = 'green';
siblings.previousElementSibling.style.color = 'orange';

console.log(output);

// blablaElemnt.blala diyoruz çunku element demezsek hemen yanındaki elemente değil diğer node geçecek