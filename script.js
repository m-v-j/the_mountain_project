var wikiButton = document.querySelector("#wikibtn")
var firstButton = document.querySelector("#firstbtn")

const collapsedClass = "nav--collapsed";
const lsKey = "nav--collapsed";
const nav = document.querySelector(".nav");
const navBorder = document.querySelector(".nav__border");

if (localStorage.getItem(lsKey) === "true") {
  nav.classList.add(collapsedClass);
}

navBorder.addEventListener("click", () => {
  nav.classList.toggle(collapsedClass);
  localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
});

wikiButton.addEventListener("click", () => {
  window.open("https://en.wikipedia.org/wiki/Mount_Everest");
});

firstButton.addEventListener("click", () => {
  window.open("https://www.thoughtco.com/the-first-to-climb-mount-everest-1779350");
});
