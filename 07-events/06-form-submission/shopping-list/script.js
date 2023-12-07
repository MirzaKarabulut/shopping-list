const form = document.querySelector('#item-form');

function onSubmit(event) {
  event.preventDefault();

  const item = document.querySelector('#item-input').value;
  const priority = document.querySelector('#priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields.');
    return;
  }
  
  console.log(item,priority);
}


// Using the FormData Object öbür yöntem daha iyi
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Get individual items
  const item = formData.get('item');
  const priority = formData.get('priority');

  console.log(item, priority);
}





form.addEventListener('submit',onSubmit)