"use strict";
var btnMenuClose = document.querySelector(".main-nav__btn-close");
var menuMob = document.querySelector(".nav-list");

/*события по кнопке "закрыть меню"*/
btnMenuClose.addEventListener("click", function (event){
  event.preventDefault();
  console.log("касание на кнопку");

  /*закрыть меню*/
  menuMob.classList.add("nav-list--close");
 /*закрыть кнопку*/
  btnMenuClose.classList.add(".main-nav__btn-close--close");
});
