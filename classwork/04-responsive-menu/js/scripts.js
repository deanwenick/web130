$(document).ready(function(){
  var ww = document.body.clientWidth;
  
  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(".nav").toggle();
  });
  
  $(".nav li a").each(function() {
<<<<<<< HEAD
    if ( $(this).next().length > 0 ) {
=======
    if ($(this).next().length > 0 ) {
>>>>>>> upstream/master
      $(this).addClass("parent");
    }
  });
  
<<<<<<< HEAD
    if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
=======
   if (ww < 800) {
    $(".toggleMenu").css("display","inline-block");
>>>>>>> upstream/master
    $(".nav").hide();
    $(".nav li a").click(function() {
      $(this).parent("li").toggleClass("hover");
    });
  } else {
<<<<<<< HEAD
    $("toggleMenu").css("display", "none");  
=======
    $("toggleMenu").css("display","none");
>>>>>>> upstream/master
    $(".nav li").hover(function() {
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    });
<<<<<<< HEAD
   } 
 
});//end document.ready function








=======
  }  

}); //end document.ready function
>>>>>>> upstream/master
