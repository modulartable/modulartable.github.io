const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

//Defining the options for our intersection observer
let options = {
  root: null,
  rootMargin: "40px",
  threshold: 0.5,
};

//A callback function that toggles the animations when an element is in the viewport
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("isInViewport", entry.isIntersecting);
  });
};

//Creates a new intersection observer with the callback function above
let observer = new IntersectionObserver(handleIntersect);

//Selects all elements in the DOM with the inviewport data attribute
const elementsInView = document.querySelectorAll("[data-inviewport]");

//Cycles through all selected elements and adds an observe listener to each
elementsInView.forEach((el) => {
  observer.observe(el, options);
});

//Toggle the mobile hamburger nav animations onClick
const animateBurger = () => {
  //Toggles the transition classes on each line of the hamburger
  line1.classList.toggle("line-1-transition");
  line2.classList.toggle("line-2-transition");
  line3.classList.toggle("line-3-transition");

  //Toggles the navBar to display block
  navBar.classList.toggle("navBarToggle");
};

//Listen for clicks on the hambuger nav to trigger the animate function
hamburger.addEventListener("click", animateBurger);
