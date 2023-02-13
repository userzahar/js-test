const gamburgerMenu = document.querySelector(".topnav-icon");
const searchIcon = document.querySelector(".js-icon");
const iconX = document.querySelector(".icon-x");
const block = document.getElementById("myLinks");
let searchInput = document.querySelector(".js-input");

gamburgerMenu.addEventListener("click", onGamburgerClick);
searchIcon.addEventListener("click", onSearchClick);
iconX.addEventListener("click", onXClick);
let flag = false;

function onGamburgerClick() {
  gamburgerMenu.classList.add("is-hidden");
  iconX.classList.remove("is-hidden");
  block.classList.remove("is-hidden");
  searchIcon.classList.add("is-hidden");
  searchInput.classList.add("is-hidden");
  searchIcon.classList.remove("search-icon--active"); //??
}

function onXClick() {
  iconX.classList.add("is-hidden");
  gamburgerMenu.classList.remove("is-hidden");
  searchIcon.classList.remove("is-hidden");
  block.classList.add("is-hidden");
  flag = false;
}

function onSearchClick() {
  if (flag === false) {
    flag = true;
    searchInput.classList.remove("is-hidden");
    searchIcon.classList.add("search-icon--active");
  } else {
    flag = false;
    searchIcon.classList.remove("search-icon--active");
    searchInput.classList.add("is-hidden");
  }
}
