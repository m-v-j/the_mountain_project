var learnButton = document.querySelector(".learnbtn");
var climberButton = document.querySelector(".firstclimberbtn");
const collapsedClass = "nav--collapsed";
const lsKey = "nav--collapsed";
const nav = document.querySelector(".nav");
const navBorder = document.querySelector(".nav__border");

learnButton.addEventListener("click", () => {
  window.open("https://en.wikipedia.org/wiki/Mount_Everest");
});

climberButton.addEventListener("click", () => {
  window.open(
    "https://www.thoughtco.com/the-first-to-climb-mount-everest-1779350"
  );
});

if (localStorage.getItem(lsKey) === "true") {
  nav.classList.add(collapsedClass);
}

navBorder.addEventListener("click", () => {
  nav.classList.toggle(collapsedClass);
  localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
});
