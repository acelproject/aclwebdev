// LOADING PAGE
const refreshPage = () => {
  location.reload();
};
const playLoader = () => {
  let loader = document.querySelector(".load-wrapper");
  let bodyLoad = document.querySelector("body");
  loader.style.display = "none";
  bodyLoad.classList.remove("overflow-hidden");
};
const stopLoader = () => {
  let loader = document.querySelector(".load-wrapper");
  loader.style.display = "none";
};

window.addEventListener("load", () => {
  let bodyLoad = document.querySelector("body");
  bodyLoad.classList.add("overflow-hidden");
  setTimeout(playLoader, 2500);
});

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const btnDarkSmallDEv = document.querySelector("#dark-mode-small");

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

// nav menus click

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
// const quotes = document.querySelector("#quote");
// const btnCloseQuote = document.querySelector("#close-quote");
// const btnQuote = document.querySelector("#btn-quote");
// const quoteCard = document.querySelector("#quote-card");
// const body = document.querySelector("body");
// const heroImg = document.querySelector("#hero-img");

// btnQuote.addEventListener("click", () => {
//   const e = quotes.classList.add("quote-active");
//   quoteCard.classList.add("quote-card-active");

//   body.classList.add("overflow-hidden");

//   if (this.window.scrollY > 0) {
//     heroImg.classList.remove("z-[10]");
//     heroImg.classList.add("z-[103]");
//   }
// });

// btnCloseQuote.addEventListener("click", () => {
//   body.classList.remove("overflow-hidden");
//   const e = quotes.classList.remove("quote-active");

//   if (e == true) {
//     heroImg.classList.remove("z-[10]");
//     heroImg.classList.add("z-[103]");
//   }
//   quoteCard.classList.remove("quote-card-active");
// });

// close navbar card on small device with klik out side area
window.addEventListener("click", (e) => {
  if (
    e.target != hamburger &&
    e.target != navMenu &&
    e.target != btnDarkModeSmallDev
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("nav-active");
  }
});

// Dark mode

const btnDarkMode = document.querySelector("#dark-mode");
const darkIcon = document.querySelector("#dark-icon");
const html = document.querySelector("body");
const inputdarkMode = document.querySelector("#input-dark");

btnDarkMode.addEventListener("click", () => {
  // const e = darkIcon.classList.toggle("darkmode-active");

  // html.classList.toggle("dark");

  // if (e == true) {
  // } else {
  // }

  if (inputdarkMode.checked) {
    html.classList.add("dark");
    // darkIcon.classList.add("darkmode-active");
    localStorage.theme = "dark";
  } else {
    // darkIcon.classList.remove("darkmode-active");
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  inputdarkMode.checked = true;
  // darkIcon.classList.add("darkmode-active");
  // inputdarkMode.checked = darkIcon.classList.add("darkmode-active");
} else {
  // darkIcon.classList.remove("darkmode-active");
  inputdarkMode.checked = false;
}

// Darkmode on small devive
const btnDarkModeSmallDev = document.querySelector("#dark-mode-small");
const inputDarkSmall = document.querySelector("#input-dark-small");

btnDarkModeSmallDev.addEventListener("click", () => {
  if (inputDarkSmall.checked) {
    html.classList.add("dark");
    // darkIcon.classList.add("darkmode-active");
    localStorage.theme = "dark";
  } else {
    // darkIcon.classList.remove("darkmode-active");
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  inputDarkSmall.checked = true;
} else {
  inputDarkSmall.checked = false;
}

//slider in portofolio section

const swiper = new Swiper('.swiper.slider-large-device', {
  speed:400,
  spaceBetween:10,
  slidesPerView:2,
  pagination:{
    el:'.swiper-pagination',
    type:'bullets',
    clickable:true,
  }
});
const swiperPhone = new Swiper('.swiper.slider-phone-device', {
  speed:400,
  spaceBetween:10,
  slidesPerView:1,
  pagination:{
    el:'.swiper-pagination',
    type:'bullets',
    clickable:true,
  }
});