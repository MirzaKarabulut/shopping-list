const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');


function addItem(e) {
  e.preventDefault();

  // Validate Input
  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item')
    return;
  }
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
  }

function removeItem(e) {
  if (e.target.parentElement.className=== 'remove-item btn-link text-red') {
    // iconun parentı button,buttonın parentı li
    e.target.parentElement.parentElement.remove();
  }
}

// clear all bastığımızda ulnin first-childı kalmayana kadar temizletecez

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}


//Event Listeners

itemForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
clearBtn.addEventListener('click',clearItems)