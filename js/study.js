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
const salaries = {
    frenk: 200,
    stiv: 300,
    iohan: 5
}

console.log(countTotalSalary(salaries))
function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
  let priceAll = Object.values(salaries);
    for(let price of priceAll) {totalSalary += price;}
    // Change code above this line
    return totalSalary;
}
  