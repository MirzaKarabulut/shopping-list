const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterItem= document.querySelector('#filter');


function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach(item => addItemToDOM(item));
  checkUI();
  }
function onAddItemSubmit(e) {
  e.preventDefault();

  // Validate Input
  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item')
    return;
  }
  //Create item to DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();
  }

function addItemToDOM(item) {
    // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);

}
  
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));// arrayı stringe çevirdik
}
  
  function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));// eğer varsa arraye çevirdik
    }
    return itemsFromStorage;
  }

function removeItem(e) {
  if (e.target.parentElement.className=== 'remove-item btn-link text-red') {
    // iconun parentı button,buttonın parentı li
    if (confirm('Are you sure?')) {
      
      e.target.parentElement.parentElement.remove();
    }
    
    checkUI();
  }
}


// clear all bastığımızda ulnin first-childı kalmayana kadar temizletecez

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

// filter itemse harf yazıp o harfı barındıran kelimeleri filtreliyecez

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    console.log(itemName);

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
  
}

// li olmadığında filter items ve clear all görukmesin

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    filterItem.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    filterItem.style.display = 'block';
    clearBtn.style.display = 'block';
  }
  
}

// Initialize app
function init() {
  //Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  filterItem.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  
   checkUI();
}

init();

