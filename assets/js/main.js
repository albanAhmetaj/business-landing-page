// Menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    nav_icon = document.getElementById("nav__icon");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      nav_icon.classList.toggle("bx-x");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");
const nav_icon = document.getElementById("nav__icon");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
  nav_icon.classList.remove("bx-x");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scrolls sections active link
const sections = document.querySelectorAll("section[id]");
const navWrapper = document.querySelector(".header-wrapper");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;
  if(scrollY > 50) {
    navWrapper.style.backgroundColor = "#252b42";
  } else {
    navWrapper.style.backgroundColor = ""
  }
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__item a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__item a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
