<?php
include("include/header.php");


//require_once("include/header.php");

 ?>
 <script>
 $(document).ready(function() {
	
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

  <div class="row">				
    <div class="col s12">
	  <div class="nis_menu">
	  <a href="#" class="theme-color waves-effect theme-color nis-togglemenu"><i class="small material-icons">reorder</i></a>
	  </div>
    <div class="col s1 nis_toolbox center">
	<a href="#" class=" right nis_slide_closebtn"><img src="images/ios7-close-empty.svg" width="25" height="25"/></a>
	<div class="col s12 theme-color btn leftpanel-position center-align Addblock">
	Add slide
	</div>
	  <div class="col s12 theme-color btn leftpanel-position center-align">
	   Add Time
	  </div>
	    <div class="col s12 theme-color btn leftpanel-position center-align">
	    Add Block
	    </div>
	      <div class="col s12 theme-color btn leftpanel-position center-align">
	        Add Animation
	      </div>
			<div class="col s12 theme-color btn leftpanel-position center-align">
			Image
			</div>
				<div class="col s12 btn theme-color leftpanel-position center-align">
				Video
				</div>
					<div class="col s12 btn theme-color leftpanel-position center-align">
						Background
					</div>
					<div class="col s12 btn theme-color leftpanel-position center-align">
					Upload Audio
					</div>
	 </div>
	  <div class="col s10">
	  <div class="container">
	    <div class="col s1 center">
	   <!--<a class="btn-floating red Addblock"><i class="material-icons">add</i>
	   </a>-->
	  </div>
      <div class="col s12" id="content" >
      <div class="col s12 displaycontrols" contentEditable="false">
       <div class="input-field col s2">
          <input  type="text" value="0">
          <label for="first_name">Enter Time for slide</label>
       </div>
		<button class="btn addtime">Submit
         <i class="material-icons right">send</i>
       </button>
     </div>
	  <div id="editable" contentEditable="true">

	  </div>	
      <button id="save">Save</button>
	  <div id="status"></div>
		  
	 </div> 
	 </div>
	 </div>
     
    </div>
<!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>	
  <div id="footer">
		<a href="http:refine-interactive.com/">Designed and developed by zikSate.com A product of Nistantri</a> 
       </div>
<?php include("preview.php"); ?>
</body>
</html>