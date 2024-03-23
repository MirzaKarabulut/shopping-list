function getData(endpoint,cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    }
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    })
  })
});
