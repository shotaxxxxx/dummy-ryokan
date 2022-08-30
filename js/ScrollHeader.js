window.addEventListener("scroll", () => {
  const header = document.querySelector(".l-header");
  const hamburger = document.querySelector(".hamburger");
  const headerHeight = header.offsetHeight;
  const scroll = window.pageYOffset;

  if (scroll > headerHeight) {
    header.classList.add("is-header-fixed");
    hamburger.classList.add("is-active-hamburger");
  } else {
    header.classList.remove("is-header-fixed");
    hamburger.classList.remove("is-active-hamburger");
  }
});
