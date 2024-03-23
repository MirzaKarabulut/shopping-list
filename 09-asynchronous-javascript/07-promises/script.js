const getActors = new Promise((resolve, rejecet) => {
  
  let actors = true;
  if(actors){
    resolve('/actors.json')
  } else {
    rejecet("actors don't exist")
  }
})

getActors
  .then((data) => {
  console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })