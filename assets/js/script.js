'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modelContainer = document.querySelector("[data-model-container]");
const modelCloseBtn = document.querySelector("[data-model-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// model variable
const modelImg = document.querySelector("[data-model-img]");
const modelTitle = document.querySelector("[data-model-title]");
const modelText = document.querySelector("[data-model-text]");

// model toggle function
const testimonialsmodelFunc = function () {
  modelContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all model items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modelImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modelImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modelTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modelText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsmodelFunc();

  });

}

// add click event to model close button
modelCloseBtn.addEventListener("click", testimonialsmodelFunc);
overlay.addEventListener("click", testimonialsmodelFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
let countDown = document.getElementById("dynamicCountDown");


// Dynamic College graduation countdown.
document.addEventListener("DOMContentLoaded", function(){
  let today = new Date();
  let gradDate = new Date("October 31, 2023");
  let timeDiff = gradDate.getTime() - today.getTime();
  let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  if(daysDiff < 0){
    let collegeDescription = document.getElementById("collegeDescription");
    collegeDescription.textContent = "I was a college student until October 31, 2023";
  } else {
    countDown.textContent = daysDiff + " days left.."
  }
})

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// blog variables
const blogItem = document.querySelectorAll("[blog-post-item]");
const blogModelContainer = document.querySelector("[blog-model-container]");
const blogModelCloseBtn = document.querySelector("[blog-model-close-btn]");
const blogOverlay = document.querySelector("[blog-overlay]");

// blog model variable
const blogModelImg = document.querySelector("[blog-model-img]");
const blogModelTitle = document.querySelector("[blog-model-title]");
const blogModelText = document.querySelector("[blog-model-text]");

// model toggle function
const blogModelFunc = function () {
  blogModelContainer.classList.toggle("active");
  blogOverlay.classList.toggle("active");
}

// add click event to all model items
for (let i = 0; i < blogItem.length; i++) {

  blogItem[i].addEventListener("click", function () {

    blogModelImg.src = this.querySelector("[data-blog-img]").src;
    blogModelImg.alt = this.querySelector("[data-blog-img]").alt;
    blogModelTitle.innerHTML = this.querySelector("[data-blog-title]").innerHTML;
    blogModelText.innerHTML = this.querySelector("[data-blog-text]").innerHTML;

    blogModelFunc();

  });

}

// add click event to model close button
blogModelCloseBtn.addEventListener("click", blogModelFunc);
blogOverlay.addEventListener("click", blogModelFunc);

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}