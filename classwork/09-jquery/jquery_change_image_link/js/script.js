$(document).ready(function(){
	$("#btn-winter").click(changeToWinter);
	$("#btn-summer").click(changeToSummer);
});

function changeToWinter()
{
	//change headline and instructions
	//change class of instructions
	//change image src

}

function changeToSummer()
{
	//change headline and instructions
	//change class of instructions
	//change image src
  $("#headline").html("Summer");
  $("#instructions").html("Go to the beach");
  
  $("body").addClass("summer").removeClass("winter");
  $("#seasonal-img").attr( "src", "images/summer-barby.jpg" );

}













