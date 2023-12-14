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
  // kod yenilendiğinde yazdığımız input kaçmasın diye korumamız lazım
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!')
  }

  // Check for edit mode

  if (isEditMode) {
    const ItemToEdit = itemList.querySelector('edit-mode');
    removeItemFromStorage(ItemToEdit.textContent);
    ItemToEdit.classList.remove('edit-mode');
    ItemToEdit.remove();
    isEditMode = false;
  }
   if (checkIfItemExists(newItem)) {
    alert('Item already exists');
    return;
  }
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  resetUI();

}

// Bu DOM'a eklenen list itemı için fonksiyon
function addItemToDOM(item) {
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

// Bu localstroage ekleneck list itemı için fonksiyon
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  // arraye yeni itemlar ekliyeceğiz
  itemsFromStorage.push(item);
  // arrayı stringe çevirecez
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    // eğer varsa arraye çevirdik
    itemsFromStorage=JSON.parse(localStorage.getItem('items'))
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

function removeItem(item){
    if (confirm('Are you sure?')) {
      // remove item from DOM
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


function clearAllItem() {
  // clear all bastığımızda ulnin first-childı kalmayana kadar temizletecez
  while(itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  } 

  // Clear from localStorage
  localStorager.removeItem('items');
  resetUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    console.log(itemName);
    if (itemName.indexOf(text) != -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });

}

function resetUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    filterItem.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    filterItem.style.display = 'block';
    clearBtn.style.display = 'block';
  }
}


function init() {
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearAllItem);
  filterItem.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  resetUI();
}

init();