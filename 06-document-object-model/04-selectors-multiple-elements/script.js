// querySelloctorAll() bu direk arraye çeviriyor.
// Diğerleri HTML collection yapıyor.Onu Arry.from()la diziye çevirioz

const listItems = document.querySelectorAll('.items');
console.log(listItems[1].innerText);

listItems[1].style.color = 'red';

listItems.forEach((item,index) => {
  item.style.color = 'red';
  
  if (index === 2) {
    item.style.color = 'blue';
  }

  if (index === 4) {
    item.innerHTML =  `NESQUİK BABA
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
  }
});
 
