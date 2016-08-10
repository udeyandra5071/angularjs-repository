<?php
session_start();
if(isset($_SESSION['user'])!="")
{
	header("Location: home.php");
}
include_once 'dbconnect.php';

if(isset($_POST['btn-signup']))
{
	$uname = mysql_real_escape_string($_POST['uname']);
	$email = mysql_real_escape_string($_POST['email']);
	$upass = md5(mysql_real_escape_string($_POST['pass']));
	$ucountry = md5(mysql_real_escape_string($_POST['country']));
	$umobile = md5(mysql_real_escape_string($_POST['mobile']));
	
	$uname = trim($uname);
	$email = trim($email);
	$upass = trim($upass);
	$ucountry = trim($ucountry);
	$umobile = trim($umobile);
	
	// email exist or not
	$query = "SELECT user_email FROM users WHERE user_email='$email'";
	$result = mysql_query($query);
	
	$count = mysql_num_rows($result); // if email not found then register
	
	if($count == 0){
		
		if(mysql_query("INSERT INTO users(user_name,user_email,user_pass,country,mobile) VALUES('$uname','$email','$upass','$ucountry','$mobile')"))
		{
			?>
			<script>alert('successfully registered ');</script>
			<?php
           
mkdir("$uname");
		}
		else
		{
			?>
			<script>alert('error while registering you...');</script>
			<?php
		}		
	}
	else{
			?>
			<script>alert('Sorry Email ID already taken ...');</script>
			<?php
	}
	
}
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registeration</title>
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="style.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/materialize.css" />

<link rel="stylesheet" type="text/css" href="css/myauthor.css" />
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/materialize.js"></script>

</head>
<body>
<div class="row">
        <div class="col s12 m4 l4 float-none">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Login</span>
         <form method="post">
            <input type="text" name="uname" placeholder="User Name" required />
             <input type="email" name="email" placeholder="Your Email" required />
            <input type="password" name="pass" placeholder="Your Password" required />
             <input type="text" name="country" placeholder="Country" />
             <input type="text" name="mobile" placeholder="Tel:"  />
            </div>
            <div class="card-action">
             <a href="index.php">Sign In Here</a>
             <button type="submit" class="btn right" name="btn-signup">Sign Me Up</button>
            
            </div>
                </form>
          </div>
        </div>
      </div>
            
</div>   
</body>
</html>