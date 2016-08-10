
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome - <?php echo $userRow['user_email']; ?></title>
 <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="style.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/materialize.css" />

<link rel="stylesheet" type="text/css" href="css/myauthor.css" />
<link rel="stylesheet" type="text/css"  href="css/animate.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/materialize.js"></script>
<script src="js/myauthor.js"></script>
</head>
<body>
<div class="row">
<div class="col m12 l12 s12 padding-0">

<nav>
    <div class="nav-wrapper header-bg">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>Hi' <?php echo $userRow['user_name']; ?>&nbsp;<a href="logout.php?logout">Sign Out</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
         <li><a href="collapsible.html">Hi' <?php echo $userRow['user_name']; ?>&nbsp;</a></li>
        <li class="black-text"><a href="logout.php?logout">Sign Out</a></li>
      </ul>
    </div>
  </nav>
