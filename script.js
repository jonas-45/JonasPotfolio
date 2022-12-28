let hamburgerIcon = document.querySelector(".mobile-menu-icon");
let mobileMenuContainer = document.querySelector(".show-mobile-menu");
let bodyContainer = document.querySelector(".container");
let hideMobileMenu = document.querySelector(".cancel-icon");
let mobileMenuItems = document.querySelectorAll(".mobile-menu-item");

hamburgerIcon.addEventListener("click", function(event){
  mobileMenuContainer.style.display = "block";
  bodyContainer.style.filter = "blur(5px)";
  bodyContainer.style.zIndex = -1;
});

hideMobileMenu.addEventListener("click", function(event){
  mobileMenuContainer.style.display = "none";
  bodyContainer.style.filter = "none";
  bodyContainer.style.zIndex = 2;
});


mobileMenuItems.addEventListener("click", function(event){
  mobileMenuContainer.style.display = "none";
});