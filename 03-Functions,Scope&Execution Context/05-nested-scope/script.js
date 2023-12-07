function first() {
  const x = 100;

  function second() {
    const y = 150;
    console.log(x * y);
  }
  second();
}

first();