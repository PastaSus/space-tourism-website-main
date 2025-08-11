const openNavBtn = document.querySelector(".nav__open");
const closeNavBtn = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");

// hides our burger and header-nav in larger screens(tablets above)
document.addEventListener("DOMContentLoaded", updateHeaderAria);
window.addEventListener("resize", updateHeaderAria);

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

// For header nav
function updateHeaderAria() {
  const isDesktop = window.innerWidth >= 768;

  nav.setAttribute("aria-hidden", isDesktop ? "false" : "true");
}

function openNav() {
  nav.classList.remove("translate-x-full", "opacity-0");
  nav.classList.add("translate-x-0", "opacity-100");

  openNavBtn.setAttribute("aria-expanded", "true");
  closeNavBtn.setAttribute("aria-expanded", "true");
  // For header nav
  nav.setAttribute("aria-hidden", "false");
}

function closeNav() {
  nav.classList.add("translate-x-full", "opacity-0");

  openNavBtn.setAttribute("aria-expanded", "false");
  closeNavBtn.setAttribute("aria-expanded", "false");

  // For header nav
  nav.setAttribute("aria-hidden", "true");
}
