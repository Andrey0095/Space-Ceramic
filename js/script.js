let showUkraine = document.querySelectorAll(".ukraine");
let showEnglish = document.querySelectorAll(".english");

let switcherToUkraine = document.querySelector(".ukr");  
let switcherToEnglish = document.querySelector(".eng");


let keyLanguage = localStorage.getItem('Language');//Получить из хранилища  значение 0 или 1


  if (keyLanguage === '0') {
    for (var i = 0; i < showUkraine.length; i++) {
    showUkraine[i].classList.remove("no-show");
    showEnglish[i].classList.add("no-show");
  };
  };

if (keyLanguage === '1') {
    for (var i = 0; i < showUkraine.length; i++) {
    showUkraine[i].classList.add("no-show");
    showEnglish[i].classList.remove("no-show");
  };  
  };


switcherToEnglish.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < showUkraine.length; i++) {
    showUkraine[i].classList.add("no-show");
    showEnglish[i].classList.remove("no-show");
  };  
  localStorage.setItem('Language',1);
});
switcherToUkraine.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < showUkraine.length; i++) {
    showUkraine[i].classList.remove("no-show");
    showEnglish[i].classList.add("no-show");
  };
  localStorage.setItem('Language',0);
});

