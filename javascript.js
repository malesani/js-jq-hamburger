$(document).ready(function(){
  $(".fa-bars").click(function(){
    console.log("click")
    var view = true;
    if(view){
      $('.hamburger-menu').css("display","block");
    }
  });

  $(".fa-times").click(function(){
    console.log("click")
    $('.hamburger-menu').css("display","none");
  });
})