var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
		window.addEventListener(orientationEvent, function() {
    console.log('Oreintation' + window.orientation + " " + screen.width);
		
		//alert("Screen Orientation changed. Please Confirm it to adjust the resolution = "+ screen.width);
		
			$(function() {
			
				if($(window).width()<=768)
									{
										$(".hide1024nfhiger").show();
									}		
									else if($(window).width()>=769)
									{
										$(".hide1024nfhiger").hide();
										
									}
							if($(window).width() <= 980) {
								
							
									$("img").each(function() {
									$(this).attr("src", $(this).attr("src").replace("images/1024x670/", "images/980x1280/"));
				
					
								});
										
																	
												
										
							//location.reload();
							}
					else if($(window).width()>= 1024){
		
								
						 $("img").each(function() {
							$(this).attr("src", $(this).attr("src").replace("images/980x1280/", "images/1024x670/"));
						
						
						});
												
												
									
						
						//location.reload();
						}
						
				else{ //location.reload();
				return false;
				}
		});
	//	event.preventDefault();
		}, false);

	