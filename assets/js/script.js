console.log("Hello world!");

// Esto portfolio cuenta con js para manipular el DOM.
// 1er Parcial TLP1
//Facundo Majda




// Elementor Toggler 

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

