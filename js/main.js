const nav = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const ham = document.querySelector(".hamburger");

console.log(nav);
nav.addEventListener("click", function () {
  if (mainNav.classList.contains("active")) {
    mainNav.classList.remove("active");
    ham.classList.remove("active");
  } else {
    mainNav.classList.add("active");
    ham.classList.add("active");
  }
});
