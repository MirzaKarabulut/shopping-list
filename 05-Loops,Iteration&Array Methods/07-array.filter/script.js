const clothes = ['pants', 'jackets', 'skirt', 'shirt'];

const iClothes = clothes.filter(clothe => clothe.length > 5);
console.log(iClothes);

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

// Get only retail companies

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);


// Get companies that started in or after 1980 and ended in or before 2005

const newCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
console.log(newCompanies);


// Get companies that lasted 10 years or more

const longCompanies = companies.filter(long => long.end - long.start > 10);
console.log(longCompanies);



