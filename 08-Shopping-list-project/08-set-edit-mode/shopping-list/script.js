const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterItem = document.querySelector('#filter');
const formBtn = document.querySelector('button');
let isEditMode = false;



function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach(item => addItemToDOM(item));
  resetUI();
  }
function onAddItemSubmit(e) {
  e.preventDefault();

  // Validate Input
  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item')
    return;
  }

  // Check for edit mode

  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  }
  if (checkIfItemExists(newItem)) {
    alert('Item already exists');
    return;
  }

  //Create item to DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  resetUI();
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
function onClickItem(e) {
  if (e.target.parentElement.className === 'remove-item btn-link text-red') {
      removeItem(e.target.parentElement.parentElement)
  } else {
    setItemToEdit(e.target);
    }
}
function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
  }
  
function setItemToEdit(item) {
  isEditMode = true;

  itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();
  }
  // Remove item from storage
  removeItemFromStorage(item.textContent);

  resetUI();
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Re-set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  }


// clear all bastığımızda ulnin first-childı kalmayana kadar temizletecez

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from localStorage
  localStorage.removeItem('items');
  resetUI();
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

function resetUI() {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    filterItem.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    filterItem.style.display = 'block';
    clearBtn.style.display = 'block';
  }
  
  formBtn.innerHTML = ' <i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';
  isEditMode = false;
}

// Initialize app
function init() {
  //Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  filterItem.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  
   resetUI();
}

init();
