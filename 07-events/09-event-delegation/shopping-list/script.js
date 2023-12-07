const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
const icon = document.querySelector('i');



list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
   }
})
list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color='green';
   }
})