// Insert AdjacentElement Example

function insertElement() {
  // Ad Itemın uzerine icon eklemek istiyorum
  const addItem = document.querySelector('.form-control');
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-plus';
  addItem.insertAdjacentElement('beforeend', icon);

}

insertElement();


// InsertAdjacentText Example

function insertText() {
  // Orangeın ustune yazı ekliyecem

  const item = document.querySelector('li:nth-child(2)');
  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

insertText();


// InsertAdjacentElements Example

function insertHtml() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('beforebegin', '<h1>InsertAdjacentElements</h1>');
  
}

insertHtml();



// InsetBefore Example buraya bir daha bakayım.Parent uzerinden çağırılabilir

 function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'ossuruk';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);// Aslında burda thirdItem referansNode yani thirdItemdan önceki yere li elementini ekle diyoruz.Ul parentnın içinde gibisel
}

insertBeforeItem();