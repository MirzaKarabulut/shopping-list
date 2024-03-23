async function getComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  console.log(comments);
}
getComments();