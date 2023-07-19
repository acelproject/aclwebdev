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
