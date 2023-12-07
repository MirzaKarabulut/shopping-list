const library = [
  {
    title: 'Manager of Garden',
    author: 'Jack London',
    status:{
      own:true,
      read: false,
      reading:false,
    },
  },
  {
    title: 'Sea Moon',
    author: 'Tolstoy',
    status:{
      own:true,
      read: false,
      reading:false,
    },
  },
  {
    title: 'The Great Gatsby',
    author: 'M. Scoot Houkl',
    status:{
      own:true,
      read: false,
      reading:false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;



const { title:firstBook } = library[0];

console.log(firstBook);

const obj = JSON.stringify(library);
console.log(obj);