<?php
	//database connection
	$conn=mysql_connect("localhost", "root", "") or die(mysql_error());
	mysql_select_db("tables") or die(mysql_error());
?>