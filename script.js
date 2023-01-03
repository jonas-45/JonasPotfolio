const hamburgerIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuContainer = document.querySelector('.show-mobile-menu');
const bodyContainer = document.querySelector('.container');
const hideMobileMenu = document.querySelector('.cancel-icon');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const menuArray = Array.from(mobileMenuItems);

const fab = document.querySelector('.fab-container');

hamburgerIcon.addEventListener('click', () => {
  mobileMenuContainer.style.display = 'block';
  bodyContainer.style.filter = 'blur(5px)';
  bodyContainer.style.zIndex = -1;
});

menuArray.forEach((menu) => {
  menu.addEventListener('click', () => {
    mobileMenuContainer.style.display = 'none';
    bodyContainer.style.filter = 'none';
    bodyContainer.style.zIndex = 2;
  });
});

hideMobileMenu.addEventListener('click', () => {
  mobileMenuContainer.style.display = 'none';
  bodyContainer.style.filter = 'none';
  bodyContainer.style.zIndex = 2;
});

window.onscroll = function () { showOrHideTopButton(); };

// When user scrolls down 500px from the top, show the scroll to top button
function showOrHideTopButton() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    fab.style.display = 'block';
  } else {
    fab.style.display = 'none';
  }
}

// scroll the page to the top
function scrollDocumentToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

fab.addEventListener('click', () => { scrollDocumentToTop(); });
