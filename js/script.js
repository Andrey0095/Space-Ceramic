let showUkraine = document.querySelectorAll(".ukraine");
let showEnglish = document.querySelectorAll(".english");  


  if (showUkraine) {  
  for (var i = 0; i < showUkraine.length; i++) {
    buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    itemAddedToBasket.classList.remove("close");
    });
  };
  iconClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemAddedToBasket.classList.add("close");
  });
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!itemAddedToBasket.classList.contains("close")) {
      itemAddedToBasket.classList.add("close");
     }
  }
  });
  }