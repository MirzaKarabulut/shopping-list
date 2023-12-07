const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();


switch (month) {
  case 1:
    console.log("Jaunury");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
  console.log('It is not jan,feb,march');
}


switch (hour) {
  case hour<11:
    console.log("Good Morning");
    break;
  case hour<16:
    console.log("Good Afternoon");
    break;
  case hour==22:
    console.log("Go to the bed");
    break;
  default:
  console.log('Good night');
}