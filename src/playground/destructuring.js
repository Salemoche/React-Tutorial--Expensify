// Object Destructuring

// console.log('yo');
//
// const person = {
//   age: '25',
//   location: {
//     place: 'Tarifa',
//     temperature: '35'
//   }
// };
//
// const {name = 'Anonymous', age} = person;
// const {place, temperature: temp} = person.location
//
// console.log(`${name} is ${age} years old `);
// console.log(`It's ${temp} in ${place}`);

// const book = {
//   title: 'Book Title',
//   author: 'Some Author',
//   publisher: {
//     name: 'Some Publisher'
//   }
// };
//
// const {name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(`${publisherName}`);


// Array Destructuring

const address = ['1st', '2nd', '3rd'];

const [address1, , address3, address4 = 'defaultAddress'] = address;

console.log(address3);

const item = ['Coffee (hot)', '1', '2', '3'];

const [coffee, pSmall, pMedium, pLarge] = item;

console.log(`A medium ${coffee} costs ${pMedium}$`);
