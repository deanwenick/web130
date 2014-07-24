
$(document).ready(function(){

  var ww = document.body.clientWidth;
  
  $(".nav li a").each(function() {
    if ( $(this).next().length > 0 ) {
      $(this).addClass("parent");
    }
  });

  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    //add active class for styling and to hide/show menu btn
    $(this).toggleClass('active');
    $(".nav").toggle();
  });

  adjustMenu();
});//end document.ready function

//call adjustMenu on resize and orientation change
$(window).bind('resize orientationchange', function() {
  ww = document.body.clientWidth;
  adjustMenu();
});

// adjustMenu() called on page load/reload
// and bound to window resize and orientation change
var adjustMenu = function() {
if (ww < 800) {
  $(".toggleMenu").css("display", "inline-block");

  //add condition to hide btn if btn not active
  if ( !$(".toggleMenu").hasClass("active") ) {
    $(".nav").hide();
  } else {
    $(".nav").show();
  }

  //unbind hover events on small screens
  $(".nav li").unbind('mouseenter mouseleave');

  $(".nav li a.parent").unbind('click').bind('click', function(e) {
    //attached to anchor element to prevent bubbling
    e.preventDefault();
    $(this).parent("li").toggleClass("hover");
  });

} else if (ww >= 800) {

  $(".toggleMenu").css("display", "none");

  //show nav on resize
  $(".nav").show();

  $('.nav li').removeClass("hover");
  $('.nav li a').unbind('click');
  $('.nav li').unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
    $(this).toggleClass('hover');
  });

 }
}; // end adjustMenu()

