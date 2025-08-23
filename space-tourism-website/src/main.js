const openNavBtn = document.querySelector(".nav__open");
const closeNavBtn = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");

openNavBtn.addEventListener("click", animateOpenNav);
closeNavBtn.addEventListener("click", animateCloseNav);

// side nav UI on tablets above
document.addEventListener("DOMContentLoaded", changeNavHeader);
window.addEventListener("resize", changeNavHeader);

function changeNavHeader() {
  const isTabletAbove = window.innerWidth >= 768;

  nav.hidden = !isTabletAbove;
}

let removeTrapFocus; // store cleanup function

// utility function - reusable (hide from ATs)
function animateOpenNav() {
  const isClose = nav.classList.contains("translate-x-full");

  if (isClose) {
    // makes it appear in the DOM first
    nav.hidden = false;

    // what follows is we request some frames to animate the slide
    requestAnimationFrame(() => {
      nav.classList.remove("translate-x-full", "opacity-0");
      nav.classList.add("translate-x-0", "opacity-100");
    });

    openNavBtn.setAttribute("aria-expanded", "true");

    // activate focus trap - still runs the function call
    removeTrapFocus = trapFocus(nav);

    closeNavBtn.focus();
  }
}
function animateCloseNav() {
  const isOpen = nav.classList.contains("translate-x-0");

  if (isOpen) {
    requestAnimationFrame(() => {
      nav.classList.add("translate-x-full", "opacity-0");
    });

    nav.addEventListener(
      "transitionend",
      () => {
        if (nav.classList.contains("translate-x-full")) nav.hidden = true;
      },
      { once: true },
    );

    openNavBtn.setAttribute("aria-expanded", "false");
    openNavBtn.focus();

    // cleanup trap focus eventListener attached when closed
    if (removeTrapFocus) removeTrapFocus();
  }
}

// TODO: for accessibility
function trapFocus(container) {
  const navFocusables = container.querySelectorAll(".nav__close, .nav__link");

  const firstEl = navFocusables[0];
  const lastEl = navFocusables[navFocusables.length - 1];

  function handleNavTrap(e) {
    const isMobile = window.innerWidth < 768;

    if (e.key !== "Tab") return;

    // check width at the moment of keydown
    if (!isMobile) return;

    // e.shiftKey - shift + tab condition
    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      if (document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }

  container.addEventListener("keydown", handleNavTrap);

  return () => container.removeEventListener("keydown", handleNavTrap);
}
