// fetch('https://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//   console.log('success');
// })


// Test with response.ok
// fetch('https://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Check for specific status
fetch('https://httpstat.us/500')
  .then((response) => {
    if (response.status === 400) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else if (response.status === 500) {
      throw new Error('Server error!');
    } else if (response.status !== 200){
    throw new Error(`Unexpected status code: ${response.status}`);
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });


// Catch runs on a network error
// fetch('https://httpstat.us/404')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log('error');
//   });