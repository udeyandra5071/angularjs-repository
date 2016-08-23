<!-- Audio Upload -->
<?php
if(isset($_POST['Submit']))
{
$file_name = $_FILES['audio_file']['name'];

if($_FILES['audio_file']['type']=='audio/mpeg' || $_FILES['audio_file']['type']=='audio/mpeg3' || $_FILES['audio_file']['type']=='audio/x-mpeg3' || $_FILES['audio_file']['type']=='audio/mp3' || $_FILES['audio_file']['type']=='audio/x-wav' || $_FILES['audio_file']['type']=='audio/wav')
{ 
 $new_file_name=$_FILES['audio_file']['name'];

 // Where the file is going to be placed
 $target_path = "audios/".$new_file_name;
 
 //target path where u want to store file.

  //following function will move uploaded file to audios folder. 
if(move_uploaded_file($_FILES['audio_file']['tmp_name'], $target_path)) {

  //insert query if u want to insert file
}
}
}

?>
<div class="col s12 m12 l12 padding-0">
<div class="col s12 m2 l2">
 <aside>
		
		<ul id="nav">
			<li><a href="#">Change player controls</a></li>		
			<li><a href="#">Settings</a></li>
			<li><a href="#"> Support</a></li>
           <li>
            <?php
if(isset($_POST['Submit']))
{
$file_name = $_FILES['audio_file']['name'];

if($_FILES['audio_file']['type']=='audio/mpeg' || $_FILES['audio_file']['type']=='audio/mpeg3' || $_FILES['audio_file']['type']=='audio/x-mpeg3' || $_FILES['audio_file']['type']=='audio/mp3' || $_FILES['audio_file']['type']=='audio/x-wav' || $_FILES['audio_file']['type']=='audio/wav')
{ 
 $new_file_name=$_FILES['audio_file']['name'];

 // Where the file is going to be placed
 $target_path = "audios/".$new_file_name;
 
 //target path where u want to store file.

  //following function will move uploaded file to audios folder. 
if(move_uploaded_file($_FILES['audio_file']['tmp_name'], $target_path)) {

  
}
}
}

?>
<form name="audio_form" id="audio_form" action="" method="post" enctype="multipart/form-data">
<div class="col s12 m12 l12">
    <label>Audio File:</label>
<div class="col s12 m12 l12">
        <input name="audio_file"  id="audio_file" type="file"/>
    </div>
<div class="col s12 m12 l12">
<input type="submit" name="Submit" id="Submit" value="Submit"/>
    </div>
</div>

</form>
            
            </li>
		</ul>

		
	</aside>   
</div>
<div class="col s12 m9 l9">
<h4>Start your project</h4>
<div class="col s12 m4 l4 text-box">
<form action="createfolder.php" method="post" target="success_message">
  <input type="text" name="project" placeholder="Project Name" class="gettext" class="required" />   
   <input type="submit" value="Create Folder"  class="create-project" /> 

</form>
  <iframe frameborder="0" scrolling="no" name="success_message" height="85"></iframe> 
</div>
    <div class="col s12 m12 l12 padding-0 animated fadeInUp template-box">
    <form action="createtemplate.php" method="post" target="success_message">
        <div class="col s12 m12 l12 padding-0 animated fadeIn">
        <div class="col s12 m6 l6"><h4>Choose your template</h4></div>
          <div class="col s12 m3 l3"><input type="submit" class="btn right next-page" value="Next>>" /></div>
        <input type="hidden" name="getthefolder" class="texttoextrct" value="" />
        </div>
   <div class="col s12 m3 l3 margin-7">
   <div class="col s12 m12 l12 theme padding-0">
        <input class="with-gap" name="templatename" type="radio" value="Blueish" id="test1"/>
      <label for="test1">Blueish</label>
       
    <img class="img-responsive" src="images/thumbnail/1.png" />   
    </div>
    </div> 
   <div class="col s12 m3 l3 margin-7">
     <div class="col s12 m12 l12 padding-0">
      <input class="with-gap" name="templatename" type="radio" value="Greyish" id="test2" />
      <label for="test2">Greyish</label>
    <img class="img-responsive" src="images/thumbnail/2.png" />   
    </div>
   </div> 
   <div class="col s12 m3 l3 margin-7">
     <div class="col s12 m12 l12 padding-0">
      <input class="with-gap" name="templatename" type="radio" value="blueish" id="test3" />
      <label for="test3">Blueish</label>
    <img class="img-responsive" src="images/thumbnail/1.png" />   
    </div>
   </div>  
    <div class="col s12 m3 l3 margin-7">
     <div class="col s12 m12 l12 padding-0">
      <input class="with-gap" name="templatename" type="radio" value="blueish" id="test4" />
      <label for="test4">Blueish</label>
    <img class="img-responsive" src="images/thumbnail/2.png" />   
    </div>
   </div> 
    <div class="col s12 m3 l3 margin-7">
     <div class="col s12 m12 l12 padding-0">
           <input class="with-gap" name="templatename" type="radio" value="blueish" id="test5" />
      <label for="test5">Blueish</label>
    <img class="img-responsive" src="images/thumbnail/1.png" />   
    </div>
   </div>
      <div class="col s12 m3 l3 margin-7">
     <div class="col s12 m12 l12 padding-0">
           <input class="with-gap" name="templatename" type="radio" value="blueish" id="test6" />
      <label for="test6">Blueish</label>
    <img class="img-responsive" src="images/thumbnail/2.png" />   
    </div>
   </div> 
  
</form>
</div>
</div>

</div>
