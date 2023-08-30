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
const html = document.querySelector("html");
const inputdarkMode = document.querySelector("#input-dark");

btnDarkMode.addEventListener("click", () => {
  if (inputdarkMode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
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
} else {
  inputdarkMode.checked = false;
}

// Darkmode on small devive
const btnDarkModeSmallDev = document.querySelector("#dark-mode-small");
const inputDarkSmall = document.querySelector("#input-dark-small");

btnDarkModeSmallDev.addEventListener("click", () => {
  if (inputDarkSmall.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
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

const swiper = new Swiper(".swiper.slider-large-device", {
  // effect:'cards',
  speed: 1000,
  spaceBetween: 10,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperPhone = new Swiper(".swiper.slider-phone-device", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// bazar portfolio
const portofolioGithubButton = document.querySelector(
  ".bazar .github"
);
const portofolioDetail = document.querySelector(
  ".bazar .dec-hover"
);
const portofolioBgHover = document.querySelector(
  ".bazar .github-bg-hov"
);

const cardGithubsvg = document.querySelector(
  ".bazar .github svg"
);


portofolioGithubButton.addEventListener("click", () => {
   portofolioBgHover.classList.toggle('active');
   portofolioDetail.classList.toggle('translate-y-[270px]');
   cardGithubsvg.classList.add('active');
   setTimeout(() => {
    cardGithubsvg.classList.remove('active');
   }, 1000);
});

// agency portfolio
const portofolioGithubButtonAgency = document.querySelector(
  ".agency .github"
);
const portofolioDetailagency = document.querySelector(
  ".agency .dec-hover"
);
const portofolioBgHoveragency = document.querySelector(
  ".agency .github-bg-hov"
);

const cardGithubsvgagency = document.querySelector(
  ".agency .github svg"
);


portofolioGithubButtonAgency.addEventListener("click", () => {
   portofolioBgHoveragency.classList.toggle('active');
   portofolioDetailagency.classList.toggle('translate-y-[270px]');
   cardGithubsvgagency.classList.add('active');
   setTimeout(() => {
    cardGithubsvgagency.classList.remove('active');
   }, 1000);
});

// mymovie portfolio
const portofolioGithubButtonmymovie = document.querySelector(
  ".mymovie .github"
);
const portofolioDetailmymovie = document.querySelector(
  ".mymovie .dec-hover"
);
const portofolioBgHovermymovie = document.querySelector(
  ".mymovie .github-bg-hov"
);

const cardGithubsvgmymovie = document.querySelector(
  ".mymovie .github svg"
);


portofolioGithubButtonmymovie.addEventListener("click", () => {
   portofolioBgHovermymovie.classList.toggle('active');
   portofolioDetailmymovie.classList.toggle('translate-y-[270px]');
   cardGithubsvgmymovie.classList.add('active');
   setTimeout(() => {
    cardGithubsvgmymovie.classList.remove('active');
   }, 1000);
});

// aclhutz portfolio
const portofolioGithubButtonaclhutz = document.querySelector(
  ".aclhutz .github"
);
const portofolioDetailaclhutz = document.querySelector(
  ".aclhutz .dec-hover"
);
const portofolioBgHoveraclhutz = document.querySelector(
  ".aclhutz .github-bg-hov"
);

const cardGithubsvgaclhutz = document.querySelector(
  ".aclhutz .github svg"
);


portofolioGithubButtonaclhutz.addEventListener("click", () => {
   portofolioBgHoveraclhutz.classList.toggle('active');
   portofolioDetailaclhutz.classList.toggle('translate-y-[270px]');
   cardGithubsvgaclhutz.classList.add('active');
   setTimeout(() => {
    cardGithubsvgaclhutz.classList.remove('active');
   }, 1000);
});


// portfolio phone klik
// Bazar portfolio
const githubButtonBazarPhone = document.querySelector(
  ".bazar-phone .github"
);
const detailBazarPhone = document.querySelector(
  ".bazar-phone .dec-hover"
);
const bgHoverBazarPhone = document.querySelector(
  ".bazar-phone .github-bg-hov"
);

const cardGithubsvgBazarPhone = document.querySelector(
  ".bazar-phone .github svg"
);


githubButtonBazarPhone.addEventListener("click", () => {
   bgHoverBazarPhone.classList.toggle('active');
   detailBazarPhone.classList.toggle('translate-y-[230px]');
   cardGithubsvgBazarPhone.classList.add('active');
   setTimeout(() => {
    cardGithubsvgBazarPhone.classList.remove('active');
   }, 1000);
});

// agency portfolio
const githubButtonagencyPhone = document.querySelector(
  ".agency-phone .github"
);
const detailagencyPhone = document.querySelector(
  ".agency-phone .dec-hover"
);
const bgHoveragencyPhone = document.querySelector(
  ".agency-phone .github-bg-hov"
);

const cardGithubsvgagencyPhone = document.querySelector(
  ".agency-phone .github svg"
);


githubButtonagencyPhone.addEventListener("click", () => {
   bgHoveragencyPhone.classList.toggle('active');
   detailagencyPhone.classList.toggle('translate-y-[230px]');
   cardGithubsvgagencyPhone.classList.add('active');
   setTimeout(() => {
    cardGithubsvgagencyPhone.classList.remove('active');
   }, 1000);
});

// mymovie portfolio
const githubButtonmymoviePhone = document.querySelector(
  ".mymovie-phone .github"
);
const detailmymoviePhone = document.querySelector(
  ".mymovie-phone .dec-hover"
);
const bgHovermymoviePhone = document.querySelector(
  ".mymovie-phone .github-bg-hov"
);

const cardGithubsvgmymoviePhone = document.querySelector(
  ".mymovie-phone .github svg"
);


githubButtonmymoviePhone.addEventListener("click", () => {
   bgHovermymoviePhone.classList.toggle('active');
   detailmymoviePhone.classList.toggle('translate-y-[230px]');
   cardGithubsvgmymoviePhone.classList.add('active');
   setTimeout(() => {
    cardGithubsvgmymoviePhone.classList.remove('active');
   }, 1000);
});

// aclhutz portfolio
const githubButtonaclhutzPhone = document.querySelector(
  ".aclhutz-phone .github"
);
const detailaclhutzPhone = document.querySelector(
  ".aclhutz-phone .dec-hover"
);
const bgHoveraclhutzPhone = document.querySelector(
  ".aclhutz-phone .github-bg-hov"
);

const cardGithubsvgaclhutzPhone = document.querySelector(
  ".aclhutz-phone .github svg"
);


githubButtonaclhutzPhone.addEventListener("click", () => {
   bgHoveraclhutzPhone.classList.toggle('active');
   detailaclhutzPhone.classList.toggle('translate-y-[230px]');
   cardGithubsvgaclhutzPhone.classList.add('active');
   setTimeout(() => {
    cardGithubsvgaclhutzPhone.classList.remove('active');
   }, 1000);
});




