  $(document).ready(function() {
		var blockcounter=1;
		$(".displaycontrols").hide();
	$(".Addblock").bind("click",function(){
		var displaycontrols='<div class="col s12 controls'+blockcounter+'"><div class="col s2"><a class="btn red inner-block'+blockcounter+'">Add Sub block</a></div><div class="input-field col s2"><input id="time" type="text" value class="validate"><label for="time" data-error="wrong" data-success="right">Enter Time</label></div><div class="col s2"><a class="btn red">Block size</a></div><div class="col s2"><a class="btn red">Add Animation</a></div><div class="col s2"><a class="btn red">Add Image</a></div><div class="col s2"><a class="btn red">Add Video</a></div></div></div>';
		var innerblock="<div class='inner-block' id='inner-block"+blockcounter+"' >Inner-Block"+blockcounter+"</div>";
		var mainblock= "<div class='mainblock' id='slideshow"+blockcounter+"' data-slide-time='0'>Slideshow"+blockcounter+"</div>";
		
		$("#editable").append(mainblock);
		
		$("#slideshow"+blockcounter).bind("click",function(){
			$(".displaycontrols").html(displaycontrols);
			$(".displaycontrols").show();
			
		});

		blockcounter++;
	 $('#slideshow'+blockcounter+':not(:first)').removeAll();
	});
	 
	});