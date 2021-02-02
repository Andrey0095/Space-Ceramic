let upButton = document.querySelector('.up-button');
let contact1 = document.querySelector('.show-kharkiv');
let contact2 = document.querySelector('.contact2-section');
let contact3 = document.querySelector('.contact3-section');
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))    {
window.onscroll = function () {
  if (window.pageYOffset > 150) {
    contact1.classList.add('shown-animation-contact1');
  }
  if (window.pageYOffset > 450) {
    contact2.classList.add('shown-animation-contact2');
  }
  if (window.pageYOffset > 700) {
    contact3.classList.add('shown-animation-contact3');
  }
};
} else {
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
  if (window.pageYOffset > 80) {
    contact1.classList.add('shown-animation-contact1');
    contact2.classList.add('shown-animation-contact2');
    contact3.classList.add('shown-animation-contact3');
  }
};
};
 upButton.onclick = function () {
  // window.scrollTo(0, 0);  
// $(document).on("click", ".go_to_top", function(e) {
//     e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 1000);
};