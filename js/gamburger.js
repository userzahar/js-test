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
  gamburgerMenu.hidden = true;
  iconX.style.display = "block";
  block.style.display = "block";
  searchIcon.style.display = "none";
  searchIcon.hidden = false;
  gamburgerMenu.style.display = "none";
  searchInput.hidden = true;
  searchIcon.classList.remove("search-icon--active");
}

function onXClick() {
  iconX.style.display = "none";
  gamburgerMenu.style.display = "flex";
  searchIcon.style.display = "flex";
  searchIcon.hidden = false;
  block.style.display = "none";
  flag = false;
}

function onSearchClick() {
  if (flag === false) {
    flag = true;
    searchInput.hidden = false;
    searchIcon.classList.add("search-icon--active");
  } else {
    flag = false;
    searchIcon.classList.remove("search-icon--active");
    searchInput.hidden = true;
  }
}
