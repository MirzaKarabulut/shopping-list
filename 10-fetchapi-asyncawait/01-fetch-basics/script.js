 
// Fetching from a JSON
fetch('./movies.json')
    .then((response) => 
    response.json())
  .then((data) => console.log(data));

// Fetching from a text 
fetch('./text.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
  
// Fetching from a API
fetch('https://api.github.com/users/mirzakarabulut')
  .then((response) =>  response.json())
  .then((data) => document.querySelector('h1').textContent=data.login);

