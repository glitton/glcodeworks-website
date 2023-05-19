const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// const about = document.getElementById("about");
const linksContainer = document.querySelector(".links-container");

// add fixed class to navbar, when scroll height is reached,
// also show back to top arrow when height of 700 is reached
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // const aboutHeight = about.getBoundingClientRect().height;
  // console.log(aboutHeight);
  const topLink = document.querySelector(".top-link");

  if (scrollHeight > navHeight) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }

  if (scrollHeight > 700) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default scroll
    e.preventDefault();
    // navigate to specific spot on page, get href attribute
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);

    const element = document.getElementById(id);
    let position = element.offsetTop;
    // console.log(position);
    window.scrollTo({ left: 0, top: position });
    sidebar.classList.remove("show-sidebar");
  });
});
