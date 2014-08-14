<?php

function sendContactMail()
{	
	if(!isset($_POST["submit"])) return false;

	if(!isset($_POST["email"]) || !isset($_POST["first-name"]) || !isset($_POST["last-name"]) || !isset($_POST["message"])) return false;
	if($_POST["email"] == "" || $_POST["first-name"] == "" || $_POST["last-name"] == "" || $_POST["message"] == "") return false;
	
	$ToEmail = 'Your Email Here'; 
	$EmailSubject = 'Web 130: Contact Form'; 
	$mailheader = "From: ".$_POST["email"]."\r\n"; 
	$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
	$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
	$MESSAGE_BODY = "Name: ".$_POST["first-name"] ." " . $_POST["last-name"]."<br>"; 
	$MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>"; 
	$MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."<br>"; 
	
	return mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
}

usleep(1000000);

if(sendContactMail())
{
	echo "YAY You sent a mail";
}	
else
{
	echo "Sorry, error sending email";	
}
?>