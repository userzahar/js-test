// function getExtremeElements(array) {
//     // Change code below this line
//   let newArray = array.splice(1, array.length-2);
//     return array;
//     // Change code above this line
// }
// const lipton = ['apple', 'peach', 'pear', 'banana'];
//   console.log(getExtremeElements(lipton))
// let message;
// function calculateEngravingPrice(message, pricePerWord) {
//     let widthMessage = message.split(" ").length;
//     let totalPrice = widthMessage * pricePerWord;
//     return totalPrice;
// }
// console.log(calculateEngravingPrice('Qlb lj legb', 20));
// message = 'Qlb lj legb'
// console.log(message.split(" ").length)
// function slugify(title) {
//     // Change code below this line
//     let slug = title.toLowerCase().split(" ").join('-');
//     return slug;
//     // Change code above this line
// }
// console.log(slugify("репорт жирні тролі"));

// function calculateTotal(number) {
//     // Change code below this line
//     for (let i = 0; i < number; i += 1) {
//         let sum = 10 + i;
//         console.log(sum);
//     }
//     return sum;

//      // Change code above this line
// }
// console.log(calculateTotal(10));
// let sum = 12;
// for (let i = 0; i < number; i += 1) {
//     let sum = sum + i;
// }
// console.log(sum);
// function calculateTotal(number) {
//     // Change code below this line
//     let newnumber;
//     let collection;
//     for (let i = 0; i < number; i += 1) {
//         newnumber = number - i;
//         // console.log(number);
//         collection = newnumber + number;
//     }
//     return collection;

//      // Change code above this line
// }
// console.log(calculateTotal(10))
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// function findLongestWord(string) {
//     // Change code below this line
//     let splitString = string.split(" ")
//     fo
//     }

//     // Change code above this line
// }

// // 'zбвко дороа ааааа сссссссс';
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i=min; i < max; i += 1) {
//         numbers.push(i);
//       }
//     // Change code above this line
//     return numbers;
// }
// console.log(createArrayOfNumbers(3, 10));

// function getCommonElements(array1, array2) {
//     // Change code below this line
//   //   let newElement = [];
//   // for (let i = 0; i < array1.length; i+=1) {
//   //   for( let z = 0; z < array2; z+=1){
//   //       if(array1[i] === array2[z]){
//   //       newElement.push(array1[i]);
//   //     }
//   //   }

//   // }

//   return array1.includes(array2);

//    // Change code above this line
// }
// console.log(getCommonElements(['3','4'], ['3','5']))
// let array1 = [2, 3, 4, 5, 44, 77, 55];
// let array2 = [3, 6, 5, 7, 55, 66];
// let next = [];
// for (let i = 0; i < array2.length; i += 1){

//     console.log(array1.includes(array2[i]));

//     if (array1.includes(array2[i]) === true){
//       next.push(array2[i]);
//     }

// }
// console.log(next);
// function getCommonElements(array1, array2) {

//   let next = [];
//   for (let i = 0; i < array2.length; i += 1){

//       console.log(array1.includes(array2[i]));

//       if (array1.includes(array2[i]) === true){
//         next.push(array2[i]);
//       }

//   }

//   return next;

// }
//   console.log(getCommonElements([1, 2, 3], [2, 4]))
// function getEvenNumbers(start, end) {
//     // Change code below this line
//    let numbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }
//     return numbers;

//     }
//     console.log(getEvenNumbers(3, 9));
// const salaries = {
//     frenk: 200,
//     stiv: 300,
//     iohan: 5
// }

// console.log(countTotalSalary(salaries))
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//   let priceAll = Object.values(salaries);
//     for(let price of priceAll) {totalSalary += price;}
//     // Change code above this line
//     return totalSalary;
// }
// //
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 }
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// // 1 перебрати весь масив фор оф; 2 порівняти пропНейм з ключами; видати значення потрібного ключа.
//   let getValues = [];
//   for (let product of products) {
//     // console.log(product);
//     let productKeys = Object.keys(product);
//     // console.log(productKeys);
//     for (let key of productKeys) {
//       // console.log(key);
//       if (key === propName) {
//         getValues.push(product[key]);
//         // console.log(lol);

//       }
//     }
//   }
//   // return product[key];
//   return getValues;
//   // Change code above this line
// }
// // getAllPropValues(price);
// console.log(getAllPropValues("price"));
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
// for (const { title, author, rating } of books) {

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював
// назву книги з oldName на newName у властивості books.Використовуй indexOf() для
// того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// знайти індекс потрібного елементу indexOf()
// олднейм це значення у масиві букс
// splice(індекс елемента який треба замінити, кіль-сть елементів які треба замінити, новий елемент (ньюНаме))
// якщо олднейм = елем масиву тоді взнаєм його індекс і заміняєм
// перебираєм масив
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     for (let book of this.books) {
//       if (oldName === book) {
//         let indexBookName = this.books.indexOf(oldName);
//         this.books.splice(indexBookName, 1, newName )
//         return this.books;
//       }
//     }

//     // Change code above this line
//   },

// };
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     for(let potion of this.potions){
//       if(potion === oldName){
//            // this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//          let indexPotion = this.potions.indexOf(oldName);
//         this.potions.splice(indexPotion, 1 , newName)
//       }
//     }
// return this.potions

//     // Change code above this line
//   },
// };
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     for(let pizza of this.pizzas ){
//         if (pizza === pizzaName ){
//           return makePizza(pizzaName);
//         }
//       }
//       return onOrderError(pizzaName);

//   },

// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// let price = 0;
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(function (price){
//     totalPrice += price;

//     console.log(price);
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice.forEach);\

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // const getUserNames = users.map(user => {
// //     // console.log(user);
// //     return user.name

// // });
// // console.log(getUserNames);
// const getFriends = (users) => { return users.flatMap(user => user.friends).filter((element, index, array) => array.indexOf(element) === index) };

// console.log(getFriends([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]));
// const players = [

//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 }
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const lol = player.playtime / player.gamesPlayed;
//   console.log(lol);
//   return total + lol;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// const getTotalFriendCount = users => {

//   return users.reduce((allFriends, user) => {
//     return [...allFriends, ...user.friends]
//   }, []).length

//      // return users.flatMap(user => user.friends).length

//   };

//   console.log(getTotalFriendCount([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]))
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// // const sortedByAuthorName = [...books].sort((firstBook, secondBook) => {
// //   const changeBook = firstBook.author;
// //   return changeBook.lokaleCompare(secondBook);
// // });
// const sortedByAuthorName = [...books].sort((a, b) => {

//   return a.lokaleCompare(b);
// });

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.lokaleCompare(firstBook));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating );

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(el => el.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((name) => { return name.author })

//   ;
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length)
//   .map(names => names.name)

// };

// console.log(getNamesSortedByFriendCount([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]));
// !------------------------------------------
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// }, ];

// const studentsLanguage = (studentsk, language) => {
//   studentsk.map(student => {
//     if (student.language === language) {
//       return student.name;
//     }
//   })

// }
// console.log(studentsLanguage(students, html))

// function getArrNames(userName, searchLanguage) {
//   const Arr = [];
//   for (const item of userName) {

//     // console.log(item);
//     if (item.language === searchLanguage)
//       Arr.push(item.name)
//   }
//   return Arr;
// }
// console.log(getArrNames(students, "html"))

// Порахувати скільки заробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр імя робітника
// Функція повертає скільки він заробив (salary*month) )

// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [{
//         name: 'Alex',
//         salary: 3500,
//         month: 12,
//     },
//     {
//         name: 'Dima',
//         salary: 2500,
//         month: 9,
//     },
//     {
//         name: 'Oleg',
//         salary: 1500,
//         month: 36,
//     },
// ];
// console.log("%c 🎱: //getFriends -> workers ", "font-size:16px;background-color:#e197f8;color:white;", workers)
// function userSalary(workers, userName) {
//   const { salary, month } = workers.find(({ name }) => name === userName);

//   console.log({ salary, month });
//     console.log("%c 🌊: userSalary", console);
//   return salary * month
// }
// ✔  🚀😁🤗🤗🤩😍😚😚🤔🤩😍😋😊😙😐😑😑🙂😚😑😶🙄🙂🙂☺😎😎🙂🙂🤗🤔

// console.log(userSalary(workers, "Dima"))
// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);
// function totalUserSalary(workers) {
// return workers.reduce((acc, {salary, month}) => acc + salary * month, 0)

// //   const result = workers.reduce((acc, elem) => {
// //     return acc + elem.salary * elem.month
// // }, 0)
// //   return result;
// };
// console.log(totalUserSalary(workers));
// console.log("%c 😁", workers)

// !--------------------

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

//

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
//   }]

// function getNewProducts(products) {
//    for (let i = 0; i < products.length; i += 1){
//      for (let u = i + 1; u < products.length; u += 1)
//        if (products[i].id === products[u].id) {
//          products[i].qty += products[u].qty;
//          products.splice(u, 1);
//          u -= 1;
//         }
//     }
//   return products;
// }

// console.log(getNewProducts(products));

// !.......................
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getTotalBalanceByGender = (users, gender) => {
//   const lol = users.filter(elem => elem.gender === gender)

//     .reduce((acc, elem) => acc + elem.balance, 0);
//   return lol;
// };

// console.log(getTotalBalanceByGender(users, "female"));

const divs = document.querySelector(".animation");

divs.addEventListener("click", addAnimation);

function addAnimation() {
  divs.classList.add("js-color");
}
