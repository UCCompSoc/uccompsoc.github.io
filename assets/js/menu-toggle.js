const hamburger = document.querySelector(".mobile-burger");
const mobileExit = document.querySelector(".mobile-exit");
const nav = document.querySelector(".nav-header-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
mobileExit.addEventListener("click", () => {
  nav.classList.toggle("show");
});