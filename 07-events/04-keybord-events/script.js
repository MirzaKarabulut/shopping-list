
const itemInput = document.querySelector('#item-input');
function keyPress(e) {
  console.log('keypressing');
}

function keyUp(e) {
  console.log('keyUping');
}
function keyDown(e) {
  console.log('keyDowning');
}
function keyDown(e) {
  // console.log(e.key);
   if (e.keyCode === 13) {
     alert('You press enter')
   }
  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  // klavyedeki her harfin kod karşılığı var mesela enter 13

  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }
   // shiftKey, ctrlKey & altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
}



// addEventListener()
// itemInput.addEventListener('keypress', keyPress);
// itemInput.addEventListener('keyup', keyUp);
 itemInput.addEventListener('keydown', keyDown);