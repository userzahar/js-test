// const loadBtn = document.querySelector(".load-button");
// const characterList = document.querySelector(".js-list");
// let page = 1;

// loadBtn.addEventListener("click", changePage);

// function lordAPI(page = 1) {
//   const options = {
//     headers: {
//       Authorization: "Bearer 3GKLiE4aCX7MGqSyCWte",
//     },
//   };

//   return fetch(
//     `https://the-one-api.dev/v2/character?limit=150&page=${page}`,
//     options
//   ).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     console.log(res);
//     return res.json();
//   });
// }

// lordAPI()
//   .then((res) => {
//     renderCharacterList(res.docs);
//     loadBtn.hidden = false;
//   })
//   .catch(console.log);

// function renderCharacterList(arrObj) {
//   const list = arrObj
//     .map(({ name, race }) => {
//       return `<li class="">
//     <h2>${name}</h2>
//     <p>${race}</p>
//   </li>`;
//     })
//     .join("");
//   characterList.insertAdjacentHTML("beforeend", list);
// }

// function changePage() {
//   page += 1;
//   lordAPI(page)
//     .then((res) => {
//       renderCharacterList(res.docs);
//       if (res.page === res.pages) {
//         loadBtn.hidden = true;
//       }
//     })
//     .catch(console.log);
// }
// ! скролллллллллллллллллллллллллллллллллллл
// let options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 0,
// };
// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1;
//       getSearch(page).then((res) => {
//         renderCard(res.results);
//         if (res.info.pages === page) {
//           buttonLoadMore.hidden = true;
//           observer.unobserve(target);
//           return;
//         }
//       });
//     }
//   });
// };
// let observer = new IntersectionObserver(callback, options);
// let target = document.querySelector(".js-guard");
// // +;;;;;;;;;;;;;
// const gallery = document.querySelector(".gallery");
// const buttonLoadMore = document.querySelector(".load-more");
// let page = 1;
// buttonLoadMore.addEventListener("click", onLoadMoreClick);

// async function getSearch(page = 1) {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/?page=${page}`
//   );
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response.json();
// }

// getSearch().then((res) => {
//   renderCard(res.results);
//   buttonLoadMore.hidden = false;
// });

// function renderCard(arrObj) {
//   console.log(arrObj);
//   const card = arrObj
//     .map(({ name, image }) => {
//       return `<div>
//     <h2>${name}
//     </h2>
//     <img src="${image}" alt="${name}"></img>
// </div>`;
//     })
//     .join("");
//   gallery.insertAdjacentHTML("beforeend", card);
//   observer.observe(target);
// }

// function onLoadMoreClick() {
//   page += 1;
//   getSearch(page).then((res) => {
//     if (res.info.pages === page) {
//       buttonLoadMore.hidden = true;
//     }
//     renderCard(res.results);
//   });
// }

// ! геолокаааааааааааааааааааааааааація
// через weather api
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
// ! завданняяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяяя
// https://docs.google.com/presentation/d/1alj1TPBpcqiRLg1EV74cYD6dFts-TPMy/edit#slide=id.p6
