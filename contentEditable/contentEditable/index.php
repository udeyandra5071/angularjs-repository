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
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        
<div class="container">
<div class="row">		
<div class="col s12">		
<div class="col s12">
   <div class="col s1 center"><a class="btn-floating red Addblock"><i class="material-icons">add</i></a></div>
  
	<div class="col s12" id="content" >
		   <div class="col s12 displaycontrols" contentEditable="false">
   
   </div>
	  <div id="editable" contentEditable="true">

	    </div>	
		 <button id="save">Save</button>
		  <div id="status"></div>
		  
	 </div>
	  
   <div id="footer">
		<!--<a href="http:refine-interactive.com/">Designed and developed by zikSate.com A product of Nistantri</a> -->
	</div>
		</div>
		</div>
	</div>
<?php include("preview.php"); ?>
</body>
</html>