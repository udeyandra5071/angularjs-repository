<?php
error_reporting(0);
error_reporting(E_ALL ^ E_WARNING); 
session_start();
$foldername = $_POST['project'];
include_once 'dbconnect.php';
$result=mysql_query("SELECT * FROM users WHERE user_id=".$_SESSION['user']);
$username=mysql_fetch_array($result);
$userfolder=$username['user_name'];
mkdir($userfolder."/".$foldername, 0777);
/*$zip = new ZipArchive;
if ($zip->open('shell.zip') === TRUE) {
    $zip->extractTo($userfolder."/".$foldername);
    $zip->close();
    echo 'Successfully created';
} else {
    echo 'failed';
}*/
?>
