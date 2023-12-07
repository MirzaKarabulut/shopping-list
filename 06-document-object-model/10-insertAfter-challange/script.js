
 // New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

const ul = document.querySelector('ul');

function insertAfter(newEl, existingEl) {
  // Insert the new element after the existing element
  
    // ul.insertBefore(newEl, existingEl.nextSibling);aşşağıdakiyle bu aynı çunku (existingEl.parentNode=ul) zaten
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling); 
}

insertAfter(li, firstItem);




