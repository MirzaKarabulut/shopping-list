//alert('hello');
//console.log(innerWidth);

const x = 100;//Burdaki x değeri global scope(global kapsam)



function run() {
  console.log(innerHeight);
  console.log(innerWidth);
  console.log(x + ' in function');
}

run();

function tuz() {
  const tuzGrami = 100;//Bu ise function scope sadece içinde olduğu fonksiyonu kapsıyor
  console.log('Elimizdeki tuzun grami ' + tuzGrami + ' gram kadar.' + x + ' benim en sevdiğim sayidir');
}   

tuz();