// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("nav-active");
});

// Navbar fixed

const header = document.querySelector("header");
const scrollUp = document.querySelector(".scrollup");
//   const fixNav = header.offsetTop;

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    header.classList.add("nav-fixed");
    scrollUp.classList.remove("scale-0");
  } else {
    header.classList.remove("nav-fixed");
    scrollUp.classList.add("scale-0");
  }
});

// bact to top
const btnScrollUp = document.querySelector(".scrollup");
const icon = document.querySelector(".scrollup div");

btnScrollUp.addEventListener("click", () => {
  icon.classList.add("animate-scrollup");

  const delet = () => {
    icon.classList.remove("animate-scrollup");
  };

  setTimeout(delet, 1500);
});

// quotes
const quotes = document.querySelector("#quote");
const btnCloseQuote = document.querySelector("#close-quote");
const btnQuote = document.querySelector("#btn-quote");
const quoteCard = document.querySelector("#quote-card");

btnQuote.addEventListener("click", () => {
  quotes.classList.add("quote-active");
  quoteCard.classList.add("quote-card-active");
});

btnCloseQuote.addEventListener("click", () => {
  quotes.classList.remove("quote-active");
  quoteCard.classList.remove("quote-card-active");
});

// close navbar card on small device with klik out side area
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("nav-active");
  }
});

// const tes = document.querySelector('.tes');


// const focus = ()=>{
//   return 'focuuussss';
// }


// console.log(focus());