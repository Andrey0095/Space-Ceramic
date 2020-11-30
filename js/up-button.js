let upButton = document.querySelector('.up-button');

window.onscroll = function () {


  if (window.pageYOffset > 50) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

 upButton.onclick = function () {
  // window.scrollTo(0, 0);  
// $(document).on("click", ".go_to_top", function(e) {
//     e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 1000);
};
  
                               
