<?php
error_reporting(0);
error_reporting(E_ALL ^ E_WARNING); 
session_start();
$postfoldername = $_POST['getthefolder'];
$templatename = $_POST['templatename'];
include_once 'dbconnect.php';
$result=mysql_query("SELECT * FROM users WHERE user_id=".$_SESSION['user']);
$username=mysql_fetch_array($result);
$userfolder=$username['user_name'];
$zip = new ZipArchive;
if ($zip->open($templatename.".zip") === TRUE) {
    $zip->extractTo($userfolder."/".$postfoldername);
    $zip->close();
    echo 'Successfully created';
} else {
    echo 'failed';
    echo $templatename;
}
?>