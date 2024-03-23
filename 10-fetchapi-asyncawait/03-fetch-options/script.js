function createPost({title,body}) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json',
       token:'abc123',
    },
  })
    .then(response => response.json())
      .then(data=>console.log(data))
}

createPost({ title: 'My post', body: 'This is my Post' });