<?php
	include("db.php");
	$content = $_POST['content']; //get posted data
	$content = mysql_real_escape_string($content);	//escape string	
	
	$sql = "INSERT INTO articles (content)VALUES ('{$content}') ";
	
	if (mysql_query($sql))
	{
		echo 1;
	}
?>