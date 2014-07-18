$(document).ready(function(){
  $("toggleMenu").css("display", "none");
  
  $(".nav li").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  });  
});