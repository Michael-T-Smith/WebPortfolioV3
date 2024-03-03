'use strict';
/* 
  __     __         _       _     _           
  \ \   / /_ _ _ __(_) __ _| |__ | | ___  ___ 
   \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
    \ V / (_| | |  | | (_| | |_) | |  __/\__ \
     \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
*/


let sidebar, sidebarBtn, testimonialsItem, modelContainer, modelCloseBtn, overlay, modelImg, modelTitle, modelText, select, selectItems, selectValue, filterBtn, projectItem, projectModelContainer, projectModelCloseBtn, projectOverlay, projectModelImg, projectModelTitle, projectModelText;

let blogItem, blogModelContainer, blogModelCloseBtn, blogOverlay, blogModelImg, blogModelTitle, blogModelText, form, formInputs, formBtn, filterItems, expandableProjects, navigationLinks, pages;

let elementToggleFunc, testimonialsmodelFunc, projectModelFunc, blogModelFunc, filterFunc;


/*
      _                  ____  _             _   
     / \   _ __  _ __   / ___|| |_ __ _ _ __| |_ 
    / _ \ | '_ \| '_ \  \___ \| __/ _` | '__| __|
   / ___ \| |_) | |_) |  ___) | || (_| | |  | |_ 
  /_/   \_\ .__/| .__/  |____/ \__\__,_|_|   \__|
          |_|   |_|                              
*/


InitPortfolio();
createHelperFunctions();
addEventListeners();


/* 
   _____                 _   _                 
  |  ___|   _ _ __   ___| |_(_) ___  _ __  ___ 
  | |_ | | | | '_ \ / __| __| |/ _ \| '_ \/ __|
  |  _|| |_| | | | | (__| |_| | (_) | | | \__ \
  |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
*/


function InitPortfolio(){
  // testimonials variables
  testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  modelContainer = document.querySelector("[data-model-container]");
  modelCloseBtn = document.querySelector("[data-model-close-btn]");
  overlay = document.querySelector("[data-overlay]");

  // model variable
  modelImg = document.querySelector("[data-model-img]");
  modelTitle = document.querySelector("[data-model-title]");
  modelText = document.querySelector("[data-model-text]");
  
  // sidebar variables
  sidebar = document.querySelector("[data-sidebar]");
  sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // custom select variables
  select = document.querySelector("[data-select]");
  selectItems = document.querySelectorAll("[data-select-item]");
  selectValue = document.querySelector("[data-select-value]");
  filterBtn = document.querySelectorAll("[data-filter-btn]");

  // project variables
  projectItem = document.querySelectorAll("[expandable-project]");
  projectModelContainer = document.querySelector("[project-model-container]");
  projectModelCloseBtn = document.querySelector("[project-model-close-btn]");
  projectOverlay = document.querySelector("[project-overlay]");
  
  // project model variable
  projectModelImg = document.querySelector("[project-model-img]");
  projectModelTitle = document.querySelector("[project-model-title]");
  projectModelText = document.querySelector("[project-model-text]");

  // blog variables
  blogItem = document.querySelectorAll("[blog-post-item]");
  blogModelContainer = document.querySelector("[blog-model-container]");
  blogModelCloseBtn = document.querySelector("[blog-model-close-btn]");
  blogOverlay = document.querySelector("[blog-overlay]");

  // blog model variable
  blogModelImg = document.querySelector("[blog-model-img]");
  blogModelTitle = document.querySelector("[blog-model-title]");
  blogModelText = document.querySelector("[blog-model-text]");

  // contact form variables
  form = document.querySelector("[data-form]");
  formInputs = document.querySelectorAll("[data-form-input]");
  formBtn = document.querySelector("[data-form-btn]");

  // filter variables 
  filterItems = document.querySelectorAll("[data-filter-item]");
  expandableProjects = document.querySelectorAll("[expandable-project]");
  
  // nav links
  navigationLinks = document.querySelectorAll("[data-nav-link]");
  pages = document.querySelectorAll("[data-page]");
}

function createHelperFunctions(){
  elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  testimonialsmodelFunc = function () {
    modelContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  projectModelFunc = function () {
    projectModelContainer.classList.toggle("active");
    projectOverlay.classList.toggle("active");
  }

  blogModelFunc = function () {
    blogModelContainer.classList.toggle("active");
    blogOverlay.classList.toggle("active");
  }

  filterFunc = function (selectedValue) {
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
}

function addEventListeners(){
  //sidebar button event listener
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

  // add click event to model close button
  modelCloseBtn.addEventListener("click", testimonialsmodelFunc);
  overlay.addEventListener("click", testimonialsmodelFunc);
  select.addEventListener("click", function () { elementToggleFunc(this); });

  // add click event to model close button
  projectModelCloseBtn.addEventListener("click", projectModelFunc);
  projectOverlay.addEventListener("click", projectModelFunc);

  // add click event to model close button
  blogModelCloseBtn.addEventListener("click", blogModelFunc);
  blogOverlay.addEventListener("click", blogModelFunc);

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

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }

  // add click event to all model items
  for (let i = 0; i < projectItem.length; i++) {
    projectItem[i].addEventListener("click", function () {
      projectModelImg.src = this.querySelector("[data-project-img]").src;
      projectModelImg.alt = this.querySelector("[data-project-img]").alt;
      projectModelTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
      projectModelText.innerHTML = this.querySelector("[data-project-text]").innerHTML;
      projectModelFunc();
    });
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

  // add click even to all portfolio items
  for(let i = 0; i < expandableProjects.length; i++){
    expandableProjects[i].addEventListener('click', () => {
      displayProject(expandableProjects[i]);
    });
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
  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
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
}

function validateRecaptcha(){
  let recaptchaResponse = grecaptcha.getResponse();
  let recaptchaError = document.getElementById('form-recaptcha');

  if(recaptchaResponse.length === 0) {
    recaptchaError.style.display = 'block';
    return false;
  } else {
    recaptchaError.style.display = 'none';
    return true;
  }
}


/* 
      _    ______   ___   _  ____                     
     / \  / ___\ \ / / \ | |/ ___|                    
    / _ \ \___ \\ V /|  \| | |                        
   / ___ \ ___) || | | |\  | |___                     
  /_/___\_\____/ |_| |_|_\_|\____|__ ___  _   _ ____  
  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
  | |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
  |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
  |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
*/

async function submitMessage(){
  event.preventDefault();
  if(formBtn.hasAttribute("disabled") || validateRecaptcha() === false) return;
  
  let form = document.getElementById('message-form');
  let errorMessage = document.getElementById('form-error');
  let successMessage = document.getElementById('form-success');
  
  const formData = {
    fullname: document.querySelector('[name="fullname"]').value,
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value
  };
  
  try {
    const response = await fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    
    if (response.ok) {
        console.log('Email sent successfully!');
        document.querySelector('[name="fullname"]').value = '';
        document.querySelector('[name="email"]').value = '';
        document.querySelector('[name="message"]').value = '';
        formBtn.setAttribute("disabled", "");
        successMessage.style.display = 'block';
    } else {
        console.error('Failed to send email:', await response.text());
        errorMessage.style.display = 'block';
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
}