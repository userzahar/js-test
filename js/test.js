const loadBtn = document.querySelector(".load-button");
const characterList = document.querySelector(".js-list");
let page = 1;

loadBtn.addEventListener("click", changePage);

function lordAPI(page = 1) {
  const options = {
    headers: {
      Authorization: "Bearer 3GKLiE4aCX7MGqSyCWte",
    },
  };

  return fetch(
    `https://the-one-api.dev/v2/character?limit=150&page=${page}`,
    options
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    console.log(res);
    return res.json();
  });
}

lordAPI()
  .then((res) => {
    renderCharacterList(res.docs);
    loadBtn.hidden = false;
  })
  .catch(console.log);

function renderCharacterList(arrObj) {
  const list = arrObj
    .map(({ name, race }) => {
      return `<li class="">
    <h2>${name}</h2>
    <p>${race}</p>
  </li>`;
    })
    .join("");
  characterList.insertAdjacentHTML("beforeend", list);
}

function changePage() {
  page += 1;
  lordAPI(page)
    .then((res) => {
      renderCharacterList(res.docs);
      if (res.page === res.pages) {
        loadBtn.hidden = true;
      }
    })
    .catch(console.log);
}
