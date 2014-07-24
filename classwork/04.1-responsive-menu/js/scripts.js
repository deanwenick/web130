var ww = document.body.clientWidth;

$(document).ready(function(){

  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    //add active class for styling
    $(this).toggleClass('active');
    $(".nav").toggle();
  });
  
  $(".nav li a").each(function() {
    if ( $(this).next().length > 0 ) {
      $(this).addClass("parent");
    }
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
    });
  } else {
    $("toggleMenu").css("display", "none");  
    
    //show nav on resize
    $(".nav").show();
    
//     $(".nav li").hover(function() {
//       $(this).addClass("hover");
//     }, function() {
//       $(this).removeClass("hover");
      
    $(".nav li").removeClass("hover");
    $(".nav li a").unbind('click');
    $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function(){
      $(this).toggleClass('hover');
    });

   } 
};//end adjustMenu

//call adjustMenu() on window resize
$(window).bind('resize orienationchange', function() {
  ww = window.body.clientWidth;
  adjustMenu();
});
























