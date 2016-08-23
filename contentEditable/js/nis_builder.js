  $(document).ready(function() {
      
	  $(".slidetime").bind("click",function(){
		  $(".overlayer").fadeIn();
            $(".outPopUp").fadeIn();
		  
	  });
	  $(".nis_slide_closebtn, .overlayer").bind("click",function(){
		   $(".overlayer").fadeOut();
            $(".outPopUp").fadeOut();
              $(".outPopUp1").fadeOut();
		  
	  });
      
		var blockcounter=0;
		$(".displaycontrols").hide();
	$(".Addblock").bind("click",function(){
		blockcounter++;
		var innerblock= "<div class='inner-block' id='inner-block"+blockcounter+"' >Inner-Block"+blockcounter+"</div>";
		var mainblock= "<div class='mainblock row' id='slideshow"+blockcounter+"' data-slide-time='0'>Slideshow"+blockcounter+"</div>";
		
		$("#editable").append(mainblock);
		
		$("#slideshow"+blockcounter).bind("click",function(){
			
			
		});
	
	
	      $(".addtime").bind("click",function(){
		    var addtime = $("input[type=text]").val();
				 $("#slideshow"+blockcounter).attr("data-slide-time",addtime);
                  
		
		 
	 });
        $(".sections").bind("click",function(){
            
             $(".overlayer").fadeIn();
            $(".outPopUp1").fadeIn();
        });
         $(".addsections").bind("click",function(){
          var sections= "<div class='sample' id='col"+blockcounter+"' >col"+blockcounter+"</div>";
		 $("#slideshow"+blockcounter).append(sections);
	 });
        
         $(".addsize").bind("click",function(){
          var addsize = $("input[type=number]").val();
				 $("#col"+blockcounter).addClass("col s"+addsize);
                    $('#col'+blockcounter+':not(:first)').removeAll();
	 });
	 $('#slideshow'+blockcounter+':not(:first)').removeAll();
       
	});
	 
	});