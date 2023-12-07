// Iconu kaldırmak istiyoruz


function removeIcon() {
  const icon = document.querySelector('#icon-id');
  icon.remove();
}

removeIcon();


// Remove Child

// function removeFirstLi() {
//   const ul=document.querySelector('ul');
//   const firstLi = document.querySelector('li:first-child');

//   ul.removeChild(firstLi);
// }

// removeFirstLi();



// remove item

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li') [itemNumber];
  ul.removeChild(li);
}

removeItem(3);

