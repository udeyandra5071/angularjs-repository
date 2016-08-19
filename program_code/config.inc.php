<?php
    // Before implementing this code, you should use your own username, password and database name values.
error_reporting(0);
    $mysql_link = mysql_connect("localhost", "root", "");   
    mysql_select_db("cms") or die("Could not select database");

    $images_dir = "photos";
?>
