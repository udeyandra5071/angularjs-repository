<?php
session_start();
include_once 'dbconnect.php';

if(isset($_SESSION['user'])!="")
{
	header("Location: home.php");
}

if(isset($_POST['btn-login']))
{
	$email = mysql_real_escape_string($_POST['email']);
	$upass = mysql_real_escape_string($_POST['pass']);
	
	$email = trim($email);
	$upass = trim($upass);
	
	$res=mysql_query("SELECT user_id, user_name, user_pass FROM users WHERE user_email='$email'");
	$row=mysql_fetch_array($res);
	
	$count = mysql_num_rows($res); // if uname/pass correct it returns must be 1 row
	
	if($count == 1 && $row['user_pass']==md5($upass))
	{
		$_SESSION['user'] = $row['user_id'];
		header("Location: home.php");
	}
	else
	{
		?>
        <script>alert('Username / Password Seems Wrong !');</script>
        <?php
	}
	
}
?>

<?php 
  include("header.php");  
?>
        
<div class="row">
        <div class="col s12 m4 l4 float-none">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Login</span>
            <form method="post">
             <input type="text" name="email" placeholder="Your Email" required />
             <input type="password" name="pass" placeholder="Your Password" required /> 
            
            </div>
            <div class="card-action">
             <a href="register.php">Sign Up Here</a>
             <button type="submit" class="btn right" name="btn-login">Sign In</button>
            
            </div>
                </form>
          </div>
        </div>
      </div>
            
</div>    

<link rel="stylesheet" type="text/css"  href="css/index.css" />
</body>
</html>