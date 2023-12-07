const data = {
  id: 1,
  title: 'Get me there',
  body: 'My bodyweight is 167lb',
};

//Convert to JSON string

const str =JSON.stringify(data)

//Parse JSON

const obj =JSON.parse(str)

console.log(str);