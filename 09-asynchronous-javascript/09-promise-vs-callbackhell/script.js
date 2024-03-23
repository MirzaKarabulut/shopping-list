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

getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json')
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json')
  })
  .then((director) => {
    console.log(director);
  })
  .catch((error)=>console.log(error));
  


