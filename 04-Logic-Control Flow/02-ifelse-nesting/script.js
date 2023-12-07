const d = new Date(27,11,2023,6,0,0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
}else if (hour < 18) {
  console.log('Good Afternoon');
}else {
  console.log('Good Night');
}

//Nested İf

if (hour < 12) {
  console.log('Good Morning');
  if (hour == 6) {
    console.log('Wake up');
  }
}else if (hour < 18) {
  console.log('Good Afternoon');
}
else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('Go to bed');
  }
}

//AND && , OR ||

if (hour >= 9 && hour < 18) {
  console.log('Working Hour');
}

if (hour == 6 || hour == 18) {
  console.log('Brush your teeth');
}


