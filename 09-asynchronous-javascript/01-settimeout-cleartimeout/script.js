// setTimeout(changeButton,3000);

function changeButton() {
  document.querySelector('h1').textContent='Hello from callback'
}

const timerId = setTimeout(changeButton, 3000);

const button = document.querySelector('#cancel');

button.addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Cancelled');
})