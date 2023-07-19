// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("nav-active");
});

// Navbar fixed

  const header = document.querySelector("header");
//   const fixNav = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  });
