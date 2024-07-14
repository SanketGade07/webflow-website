// Get the hamburger icon and menu
const hamburger = document.querySelector("#icon");
const menu = document.querySelector(".left-links");

// Add click event listener to hamburger icon
hamburger.addEventListener("click", () => {
  // Toggle the 'active' class on both hamburger icon and menu
  console.log('hii')
 hamburger.classList.toggle("fa-xmark");
  menu.classList.toggle("active");
});
