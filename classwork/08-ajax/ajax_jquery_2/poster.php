<?php
	$data = $_POST["data"];
	
	if($data == "")
	{
		echo "";
	}
	else if($data == 1)
	{
		echo "1 is the perfect number of apples";
	}
	else if($data == 2)
	{
		echo "2 is a pair";
	}
	else if($data == 3)
	{
		echo "3 cookies sounds like a party in my mouth";
	}
	else
	{
		echo "Sorry I got lazy and didn't want to make a message about this number";
	}
?>