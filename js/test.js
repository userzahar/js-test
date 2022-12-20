// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// !!! year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// !! Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);
// Date.prototype.setFullYear()
// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)
// class User {
//   #name
//   #surname
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     let today = new Date();
//     let currentYear = today.getFullYear();
//     let course = currentYear - this.year;
//     if (course >= 5) {
//       return `Cтудент ${this.getFullName()} являєтmся випускником`
//     }
//     return course;
//   }
// }
// const zahar = new Student("Zahar", "Lavrenchuk", );
// console.log(zahar);
// const student = new Student('Петрик', 'Пяточкин', 2015);


// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse());   //поверне 3 (третій курс)


// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде значенням ключа
// Результат на який очікуємо
// const obj = {
  //     a: 3,
  //     b: 4,
  //     s: 2,
  //     // ...
  // }
  // const objSentence = {};
//   const str = 'absdabsrgbadgtdswwbetflg';
// const letters = str.split('').reduce((acc, el) => {
//   if (!acc.hasOwnProperty(el)) {
//      acc[el] = 1;
//   } else {  acc[el] += 1 }
// return acc }  , {})
// console.log(letters);

// const str = 'absdabsrgbadgtdswwbetflg';
// const letters = str.split('').reduce((acc, item) => {
//     if (!acc.hasOwnProperty(item)) {
//         acc[item] = 1;
//     }
//     else {
//         acc[item] += 1
//     };
//      return acc;
// },{});
// console.log(letters);

// const students = [{
//   name: "Манго",
//   score: 83
// },
// {
//   name: "Полі",
//   score: 59
// },
// {
//   name: "Аякс",
//   score: 37
// },
// {
//   name: "Ківі",
//   score: 94
// },
// ];

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const getNameTime = players.reduce((acc, player) => {
  
//   const time = player.playtime / player.gamesPlayed;
//   const object = {
//     time, name: player.name,
//   }
//   console.log(object)
//   acc.push(object);
//   return acc;
// }, [])
//   console.log(getNameTime)



// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log("🚀 ~ file: test.js:127 ~ listItems", listItems)
// const lol = [...listItems]
// console.log(lol);
// console.log(lol === listItems)
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);

console.log(list.insertAdjacentHTML("beforeend", markup))
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

