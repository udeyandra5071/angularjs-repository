<?php  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="Materialize is a modern responsive CSS framework based on Material Design by Google. ">
    <title>Documentation - Materialize</title>

    <!-- CSS-->
    <link href="css/prism.css" rel="stylesheet">
    <link href="css/ghpages-materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="http://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 
    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

    <script src="js/jquery.timeago.min.js"></script>  
    <script src="bin/materialize.js"></script>
    <script src="js/init.js"></script>
	<script src="js/nis_builder.js"></script>
	  <style>
	body {		
		font-family: Helvetica,Arial,sans-serif;
		color:#333333;
		font-size:13px;
	}
	
    h1{
		font-family: 'Droid Serif', Georgia, Times, serif;
		font-size: 28px;		
	}
.mainblock{float:left;
position:relative;
width:100%;
height:auto;}

	
	#content{
		background: #f7f7f7;
		border-radius: 10px;
	}
	
	#editable {		
		padding: 10px;		
	}
	
	#status{
		display:block; 
		margin-bottom:15px; 
		padding:5px 10px; 
		border-radius:5px;
	}
	
	.success{
		background: #B6D96C;
	}
	
	.error{
		background: #ffc5cf; 
	}
	
	#footer{
		margin-top:15px;
		text-align: center;
	}
	
	#save{
	display: block;
	outline: none;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	font: 12px/100% Arial, Helvetica, sans-serif;
	font-weight: 700;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	color: #606060;
	border: solid 1px #b7b7b7;
	background: #fff;
	background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ededed));
	background: -moz-linear-gradient(top,  #fff,  #ededed);
		filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed');
	float: left;
	
	margin-top: 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	margin-left: 10px;
	padding-top: 5px;
	padding-right: 10px;
	padding-bottom: 5px;
	padding-left: 10px;
	}	
	
	#save:hover
	{
        background: #ededed;
		background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#dcdcdc));
		background: -moz-linear-gradient(top,  #fff,  #dcdcdc);
		filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#dcdcdc');
	}
	#editable div{border:1px solid #f4f4f4;margin:0.5rem;}
	
    </style>

  </head>
 