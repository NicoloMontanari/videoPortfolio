$(window).on("load",function(){
  $(".loader-wrapper").fadeOut(1600);
 
  $('html, body').css({
    'overflow': 'auto',
  })
});

$(document).ready(function(){
    $(this).scrollTop(0);
});