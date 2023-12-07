function replaceFirstItems(){
  const firstItem = document.querySelector('li:nth-child(1)');

  const li = document.createElement('li');
  li.innerText = 'replaced first';

  firstItem.replaceWith(li);
}

replaceFirstItems();

/////////////// 

function replaceSecondItems() {
  const secondItem = document.querySelectorAll('li')[2];
  secondItem.outerHTML = '<li> bambu agaci </li>';
}

replaceSecondItems();



///////////////

function replacedAllItems() {
  
  const allLi = document.querySelectorAll('li');
  
  allLi.forEach((item, index) => {
    if (index === 2) {
      item.innerHTML = 'sdfsdf';
    } else {
      
      item.outerHTML = '<li> bambu agaci </li>';
    }
  });

}


replacedAllItems();



//// Başlığı h1den h2ye çevirecez

function replaceHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('#app-title');
  const h4 = document.createElement('h4');
  h4.textContent = 'Basligi degistirdik';

  header.replaceChild(h4, h1);

}

replaceHeading();
