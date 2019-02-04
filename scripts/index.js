const navbar = document.getElementById("header");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const navBarToggle = document.getElementById("js-navbar-toggle");
const navDrop = document.getElementById("nav-drop");

function navColor() {
  const topSection = window.scrollY + 300;
  sections.forEach((section, i) => {
    if (i < 2) {
      if (
        topSection > section.offsetTop &&
        topSection < sections[i + 1].offsetTop
      ) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    } else if (topSection >= sections[2].offsetTop) {
      links[2].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  });
  if (window.scrollY < 10) {
    navbar.style.backgroundColor = "";
    navbar.style.boxShadow = "";
  } else {
    navbar.style.backgroundColor = "#fcfcfc";
    navbar.style.boxShadow = "0 0.2rem 1rem rgba(0, 0, 0, 0.2)";
  }
}

window.addEventListener("scroll", navColor);
navBarToggle.addEventListener("click", () => {
  navDrop.classList.toggle("nav-drop-active");
  navBarToggle.classList.toggle("open");
});

window.onload = navColor;
