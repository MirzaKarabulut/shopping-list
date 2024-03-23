const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    
    data.forEach(movies => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movies.title}</strong> - ${movies.year}`;
      document.querySelector('#results').appendChild(li);
    });
  }
}


  xhr.send();


