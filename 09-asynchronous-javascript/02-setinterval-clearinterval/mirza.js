// const intervalId = setInterval(myCallBack, 1000, 'Hello');

// function myCallBack(a) {
//   for (let x = 0; x < 10; x++){
//     console.log(a,'This is a loop that runs every second');
//   }
// }

let intervalId;

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 100);
  }
  document.querySelector('h1').textContent='Tatlı Balım Hangi renkte durmak ister?'
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black'){
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// } else {
//   document.body.style.backgroundColor = "white";
//   document.body.style.color = "";
//   }
// }

function changeRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*1677215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

function stopChange() {
  clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click',stopChange)
