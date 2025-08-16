# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Add solution URL here](https://github.com/PastaSus/space-tourism-website-main)
- Live Site URL: [Add live site URL here](https://space-tourism-website-main-ac.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- ARIA/Accessibility
- CSS custom properties
- Flexbox
- CSS Grid
- vanilla JS
- Tailwind CSS
- Vite
- Resposively
- Mobile-first workflow

### What I learned

This was a nice project to get used to tailwinds utility classes and apply the accessibility i've learned recently

To see how you can add code snippets, see below:

```html
<nav
  class="nav nav--mobile fixed top-0 right-0 z-1 h-dvh w-[68.5dvw] translate-x-full items-baseline opacity-0 backdrop-blur-2xl transition-transform duration-700 ease-in-out md:relative md:ml-auto md:h-auto md:w-auto md:translate-0 md:opacity-100 xl:pl-34"
  id="mobileNav"
  aria-hidden="true"
>
  <div class="mt-8 flex px-5 md:hidden">
    <button
      class="nav__close ml-auto cursor-pointer md:hidden"
      aria-label="Close navigation menu"
      aria-controls="mobileNav"
      aria-expanded="false"
    >
      <img src="/assets/shared/icon-close.svg" alt="" />
    </button>
  </div>
  <ul
    class="nav__list flex flex-col gap-7 pr-0 font-[barlow_condensed,_sans-serif] tracking-widest md:flex-row md:gap-12 md:py-0 md:pl-0"
  >
    <li class="nav__item">
      <a
        href="/index.html"
        class="nav__link relative flex gap-3 uppercase md:py-8.5 md:after:top-auto md:after:bottom-0 md:after:h-[3px] md:after:w-full"
      >
        <span class="nav__index font-semibold" aria-hidden="true"> 00</span>
        <span class="font-light"> Home</span></a
      >
    </li>
    <li class="nav__item">
      <a
        href="/pages/destination-moon.html"
        class="nav__link relative flex gap-3 uppercase md:py-8.5 md:after:top-auto md:after:bottom-0 md:after:h-[3px] md:after:w-full"
      >
        <span class="nav__index font-semibold" aria-hidden="true"> 01 </span>
        <span class="font-light"> Destination</span></a
      >
    </li>
    <li class="nav__item">
      <a
        href="/pages/crew-commander.html"
        class="nav__link active relative flex gap-3 uppercase md:py-8.5 md:after:top-auto md:after:bottom-0 md:after:h-[3px] md:after:w-full"
        ><span class="nav__index font-semibold" aria-hidden="true"> 02</span>
        <span class="font-light"> Crew</span></a
      >
    </li>
    <li class="nav__item">
      <a
        href="technology-vehicle.html"
        class="nav__link relative flex gap-3 uppercase md:py-8.5 md:after:top-auto md:after:bottom-0 md:after:h-[3px] md:after:w-full"
        ><span class="nav__index font-semibold" aria-hidden="true"> 03</span>
        <span class="font-light">Technology</span></a
      >
    </li>
  </ul>
</nav>
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/PastaSus)

## Acknowledgments

Kevin powells videos are always helpful in these challenges and also the articles shared by FEM in general!
