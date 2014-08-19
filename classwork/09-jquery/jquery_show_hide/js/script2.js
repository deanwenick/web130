$(document).ready(function(){
	$("#kittens").hide();
	$("#show-hide").click(showHide);
	$("#pretty-link").click(makePretty);
});

function showHide()
{
	if($("#kittens").is(":visible"))	//if the text is visible
	{
		$("#show-hide").html("Show");
	}
	else
	{
		$("#show-hide").html("Hide");
	}
	
	$("#kittens").slideToggle();
	
	return false;	//don't go to link destination
}

function makePretty()
{
	$("#kittens").toggleClass("pretty");
	return false;
}









