const logo = document.querySelector('img');

function onClick() {
  console.log('one click event');
}

function doubleClick() {
  if (document.body.style.backgroundColor !== 'purple' || document.body.style.padding == '100px') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
    document.body.style.padding = '10px'
  } else if (document.body.style.backgroundColor == 'purple') {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
    document.body.style.padding = '100px'
  }
}

function rightClick() {
  console.log('I am right clicking');
}
function mouseDown() {
  console.log('mouse down');
}
function mouseUp() {
  console.log('mouse up');
}
function mouseWheel() {
  console.log('mouse wheel');
}
function mouseUp() {
  console.log('mouse up');
}
function mouseOver() {
  console.log('mouse over');
}
function mouseOut() {
  console.log('mouse out');
}
function onDrag() {
  console.log('drag event');
}
function onDragEnd() {
  console.log('drag end event');
}


// addEventListener
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', doubleClick);
logo.addEventListener('mousedown', mouseDown);
logo.addEventListener('mouseup', mouseUp);
logo.addEventListener('wheel', mouseWheel);
logo.addEventListener('mouseover', mouseOver);
logo.addEventListener('mouseout', mouseOut);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

