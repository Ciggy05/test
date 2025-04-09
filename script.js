'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

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


// Add this code to check if images are loading
// Replace the storage access code with a try-catch block
// Replace storage access code with safer alternatives
// Replace the try-catch block with safer event handling
document.addEventListener('DOMContentLoaded', function() {
  // Image handling
  const images = document.getElementsByTagName('img');
  Array.from(images).forEach(img => {
    img.onerror = () => {
      console.warn('Image not found:', img.src);
      img.style.display = 'none';
    };
  });

  // Select handling
  const select = document.querySelector("[data-select]");
  if (select) {
    select.addEventListener("click", () => elementToggleFunc(select));
  }

  // Form handling
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
      }
    });
  }
});

// Add this function at the top of your script
function resetCollapsibleSections() {
  const collapsibleContents = document.querySelectorAll('.collapsible-content');
  const collapsibleTriggers = document.querySelectorAll('.collapsible-trigger');
  
  collapsibleContents.forEach(content => {
    content.classList.remove('expanded');
    content.style.maxHeight = '200px';
  });
  
  collapsibleTriggers.forEach(trigger => {
    trigger.classList.remove('active');
  });
}

// Update the navigation event listener
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        resetCollapsibleSections(); // Add this line to reset collapsible sections
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Keep your existing collapsible functionality
document.addEventListener('DOMContentLoaded', function() {
  const triggers = document.querySelectorAll('.collapsible-trigger');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const section = trigger.getAttribute('data-section');
      const content = document.querySelector(`.collapsible-content[data-section="${section}"]`);
      const isExpanded = content.classList.contains('expanded');
      
      content.classList.toggle('expanded');
      trigger.classList.toggle('active');
      
      if (isExpanded) {
        content.style.maxHeight = '200px';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  
});




// Add this to your existing script.js
function handleImageErrors() {
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    img.onerror = function() {
      this.onerror = null; // Prevent infinite loop
      this.src = '/images/fallback.jpg';
      this.alt = 'Image not available';
      this.classList.add('image-fallback');
    };
  }
}

// Call this function when the document loads
document.addEventListener('DOMContentLoaded', handleImageErrors);