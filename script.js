let hamburgerIcon = document.querySelector(".mobile-menu-icon");
let mobileMenuContainer = document.querySelector(".show-mobile-menu");
let bodyContainer = document.querySelector(".container");
let hideMobileMenu = document.querySelector(".cancel-icon");
let mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
let menuArray = Array.from(mobileMenuItems);

let fab = document.querySelector(".fab-container");

hamburgerIcon.addEventListener("click", function(event){
  mobileMenuContainer.style.display = "block";
  bodyContainer.style.filter = "blur(5px)";
  bodyContainer.style.zIndex = -1;
});

menuArray.forEach(menu => {
  menu.addEventListener("click", function(event){
    mobileMenuContainer.style.display = "none";
    bodyContainer.style.filter = "none";
  bodyContainer.style.zIndex = 2;
  });
});

window.onscroll = function(){showOrHideTopButton()};

//When user scrolls down 500px from the top, show the scroll to top button
function showOrHideTopButton() {
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    fab.style.display = "block";
  }else{
    fab.style.display = "none";
  }
}

//scroll the page to the top
function scrollDocumentToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

fab.addEventListener("click", function(event){scrollDocumentToTop()});
