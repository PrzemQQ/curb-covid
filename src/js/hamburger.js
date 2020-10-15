const btnHamburger = document.querySelector(".c-nav__btn");
const spanHamburger = document.querySelector(".c-nav__hamburger");
const navList = document.querySelector(".c-nav__list");
const { style } = navList;
let isClicked = false;

window.onresize = () => {
  const windowWidth = parseInt(window.innerWidth, 10);
  if (windowWidth > 768) {
    style.transform = "translateX(0)";
  }
};

btnHamburger.addEventListener("click", () => {
  isClicked = !isClicked;

  if (isClicked) {
    style.transform = "translateX(0)";
    spanHamburger.classList.add("c-nav__hamburger--is-displayed");
  } else {
    style.transform = "translateX(100%)";
    spanHamburger.classList.remove("c-nav__hamburger--is-displayed");
  }
});