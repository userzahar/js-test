//Замінити всі розширення файлів з .css на .js
//const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];
// створити констант для массиву
// створити цикл
// замінити з допомогою replace() 

const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];
// for (let i = 0; i < files.length; i += 1) {
//     // console.log(files[i]);
//     files[i] = files[i].replace(".css", ".js");
// }
// console.log(files);

const filesTojs = files.join(" ").replaceAll(".css", ".js").split(" ");
// console.log(filesTojs);
