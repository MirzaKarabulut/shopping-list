const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

 function onInput(e) {
   heading.innerText = e.target.value;
  }
function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked': 'Not Checked';
 }
function onFocus(e) {
  console.log('Input is focused');
  itemInput.style.outlineStyle='solid'
  itemInput.style.outlineColor='green'
  itemInput.style.outlineWidth='1px'
 }
function onBlur(e) {
  console.log('Input is not focused');
  itemInput.style.outlineStyle='none'
 }

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
