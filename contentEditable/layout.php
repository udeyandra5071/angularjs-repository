<?php
include("include/header.php");


//require_once("include/header.php");

 ?>
<!Doctype html>
<html>
<head>
<title>
    Main Page UI
</title>
<link rel="stylesheet" type="text/css" href="css/niseditor.css" />
     <script>
 $(document).ready(function() {
	 $('.modal-trigger').leanModal();
		$("#save").click(function (e) {			
			var content = $('#editable').html();	
			$(".displaycontrols").empty();	
			$(".displaycontrols").remove();	
			$.ajax({
				url: 'save.php',
				type: 'POST',
				data: {
                content: content
				},				
				success:function (data) {
							
					if (data == '1')
					{
						$("#status")
						.addClass("success")
						.html("Data saved successfully")
						.fadeIn('fast')
						.delay(3000)
						.fadeOut('slow');	
					}
					else
					{
						$("#status")
						.addClass("error")
						.html("An error occured, the data could not be saved")
						.fadeIn('fast')
						.delay(3000)
						.fadeOut('slow');	
					}
				}
			});   
			
		});
		
		$("#editable").click(function (e) {
			$("#save").show();
			e.stopPropagation();
		});
	
		$(document).click(function() {
			$("#save").hide();  
		});
 });
		</script>
</head>
<body>
 
<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
    <div class="row bottom-no-margin border-bottom">
    <div class="col s12">
        <nav>
  <div class="nav-wrapper header-color">
    <a href="#!" class="brand-logo">zikSate.com
	<span class="tagline">CREATE E-COURSE</span></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">HOME</a></li>
      <li><a href="badges.html">ABOUT</a></li>
	  <li><a href="badges.html">DOCUMENTATION</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">MORE<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        </div>
    </div>

    <div class="row">
        <div class="col s12">
        <div class="col s2  z-depth2 left side-panel width-manager height-manager">
            <div class="col s3 center white-text outer-gap center-align Addblock">
                <i class="small material-icons white-text">picture_in_picture</i>
                Slide
            </div>
                <div class="col s3 center white-text outer-gap center-align slidetime">
                <i class="small material-icons white-text">query_builder</i>
              Time
            </div>
                <div class="col s3 center white-text outer-gap center-align sections">
                <i class="small material-icons white-text">web</i>
                Block
            </div>
              
                <div class="col s3 center white-text outer-gap center-align">
                <i class="small material-icons white-text">perm_media</i>
               Image
            </div>
                 <div class="col s3 center white-text outer-gap center-align">
                <i class="small material-icons white-text">theaters</i>
               Video
            </div>
              
            </div>
            <div class="col s10">
             <div class="col s12  ">
                <div class="editable-box white">
                  <div id="editable" contentEditable="true">

	               </div>
                      <button class="btn right" id="save">Next</button>
	                  <div id="status"></div>
                 </div>
                   
                </div>
            </div>
      
        </div>
        </div>
   
    <div class="outPopUp">
        <div class="row">
        <div class="col s12">
            <a class="nis_slide_closebtn right ">
            <img src="images/icon.png" />
            
                                                               </a>
        </div>
        </div>
        
     <div class="row ">
        <div class="input-field col s10 center">
          <input  type="text" value="0">
          <button class="btn addtime common-bg">Add Time
         <i class="material-icons right">send</i>
       </button>
       </div>
        
      </div>
    </div>
    
        <div class="outPopUp1">
        <div class="row">
        <div class="col s12">
            <a class="nis_slide_closebtn right ">
            <img src="images/icon.png" />
            
                                                               </a>
        </div>
        </div>
        
     <div class="row ">
        <div class="input-field col s10 center">
          <input  type="number" value="0">
            <button class="btn addsections common-bg">Add Block
         <i class="material-icons right">send</i>
       </button>
          <button class="btn addsize common-bg">Add Size
         <i class="material-icons right">send</i>
       </button>
            
       </div>
        
      </div>
    </div>
    
      <div class="overlayer">
                 
     </div>
    <?php include("preview.php"); ?>
    </body>
</html>