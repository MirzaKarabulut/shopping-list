// addEventListener()

const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', function () {
//   alert('MirzA Engelli')
// })
// clearBtn.addEventListener('click', function () {
//   console.log('Write to the console');
// })



// Different Method
function onClear() {
  alert('Clear time')
}

// clearBtn.addEventListener('click', onClear)

// Belli bir zamandan sonra alert çalışmayacak
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

//Belli bir zaman sonra alert çalışacak
// setTimeout(() => clearBtn.click(), 5000);


// Clear All bastığımda butun ul elemenetleri gidecek

function removeItems() {
  const ul = document.querySelector('#item-list');
  const items = ul.querySelectorAll('li');
  // const li = document.querySelector('li');

  items.forEach((item) => item.remove())
}

clearBtn.addEventListener('click', removeItems);
