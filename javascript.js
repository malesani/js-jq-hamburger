$(document).ready(function(){
  $(".fa-bars").click(function(){
    console.log("click")
    var view = true;
    if(view){
      $('.hamburger-menu').css("display","block");
      $('.hamburger-menu').css("display","block");
      $('.hamburger-menu').css("min-width","0");
      $('.hamburger-menu').css("min-height","0");
      $('.hamburger-menu').css("width","30%");
      $('.hamburger-menu').css("height","80%");
    }
  });

  $(".fa-times").click(function(){
    console.log("click")
    $('.hamburger-menu').css("display","none");
  });
})