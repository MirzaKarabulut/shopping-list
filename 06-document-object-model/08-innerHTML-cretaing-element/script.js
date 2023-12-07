// Quick & Dirty

function firstListItems(item) {
  const li = document.createElement('li');
  document.querySelector('.items').appendChild(li);
  li.innerHTML=`
        ${item}
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `
}

firstListItems('strawberry');


// Clean & Performant

function newListItems(item) {
  
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


newListItems('apple');