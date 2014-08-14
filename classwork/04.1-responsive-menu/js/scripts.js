var ww = document.body.clientWidth;
<<<<<<< HEAD

$(document).ready(function(){

  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    //add active class for styling
=======
$(document).ready(function(){

  
  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    // add active calss for styling
>>>>>>> upstream/master
    $(this).toggleClass('active');
    $(".nav").toggle();
  });
  
  $(".nav li a").each(function() {
    if ( $(this).next().length > 0 ) {
      $(this).addClass("parent");
    }
<<<<<<< HEAD
  });
  
  adjustMenu();

 
});//end document.ready function

// call function on page load and on window resize
var adjustMenu = function() {
  if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");

    
    //add condition to show/hide btn if btn active
    if ( !$(".toggleMenu").hasClass("active") ) {
      $(".nav").hide();
    } else {
      $(".nav").show();
    }
    
    
    
    //unbind events on small screen
    $(".nav li").unbind('mouseenter mouseleave');
    
    $(".nav li a.parent").unbind('click').bind('click', function(e) {
      //attached to anchor element to prevent bubbling
      e.preventDefault();
      $(this).parent("li").toggleClass("hover");
=======
  });     
  
  adjustMenu();
 
});//end document.ready function

// call function on page load and on windows resize
var adjustMenu = function() {
  
   if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
     
     // add condition to show/hide btn if btn active
     if (!$(".toggleMenu").hasClass("active")) {
       $(".nav").hide();
     } else {
       $(".nav").show();
     }
     
     //unbind events on small screen
     $(".nav li").unbind('mouseenter mouseleave');
     $("nav li a.parent").unbind('click').bind('click', function(e) {
       //attached to anchor element to prevent bubbling
       e.preventDefault();
       $(this).parent("li").toggleClass("hover");
>>>>>>> upstream/master
    });
  } else {
    $("toggleMenu").css("display", "none");  
    
    //show nav on resize
    $(".nav").show();
    
<<<<<<< HEAD
//     $(".nav li").hover(function() {
//       $(this).addClass("hover");
//     }, function() {
//       $(this).removeClass("hover");
      
=======
>>>>>>> upstream/master
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind('click');
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function(){
      $(this).toggleClass('hover');
    });
<<<<<<< HEAD

   } 
};//end adjustMenu

//call adjustMenu() on window resize
$(window).bind('resize orienationchange', function() {
=======
    
    
//     $(".nav li").hover(function() {
//       $(this).addClass("hover");
//     }, function() {
//       $(this).removeClass("hover");
//     });
   } 
};

// call adjustMenu() on window resize
$(window).bind('resize orientationchange', function() {
>>>>>>> upstream/master
  ww = window.body.clientWidth;
  adjustMenu();
});


<<<<<<< HEAD






















=======
>>>>>>> upstream/master
