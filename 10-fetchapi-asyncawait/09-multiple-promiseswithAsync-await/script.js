function getData(endpoint) {
  return new Promise((resolve, reject) => {
    
      const xhr = new XMLHttpRequest();
      xhr.open('GET', endpoint);
    
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          
          if (xhr.status === 200){
              resolve(JSON.parse(xhr.responseText));
          } else {
            reject('Something went wrong')
            }
        }
        }
        setTimeout(() => {
          xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
  });
}

async function getAllData() {
  const movies = await getData('./movies.json');
  const directors = await getData('./directors.json');
  const actors = await getData('./actors.json');
  console.log(movies,directors,actors);
}

getAllData();


