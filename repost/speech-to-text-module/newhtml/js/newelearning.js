$(document).ready(function() {
	$(".closer").bind("click",function(){
		
		$(".close").hide();
		$(".popupbox").hide();
	});
	
$(".launch").fadeIn();
$(".launch_button").click(function(){
	 
	$(".nis_wrapper_emod").show();
	$(".logout").click(function(){
	window.top.close();
	});
	
	$(".nis_frame_emod").load("page1.html",function(){
		$(".counter").text(num);
		$(".page_content").addClass("page1_content");
		
		// effects and bullet animations
		$(".page1_content").fadeIn();
		
		//End of bullets and animation
		});
	$(".launch").hide();
		var num=1;
		
	$("#next").click(function(){
		num++;
		var nextFrame="page"+num+".html";
    $(".nis_frame_emod").load(nextFrame, function( response, status, xhr ) {
		$(".counter").text(num);
		if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();}
	 $(".page_content").addClass("page"+num+"_content");
	  $(".title").addClass("title"+num);
	   $(".paragraph").addClass("paragraph"+num);
	    $(".bullets").addClass("bullets"+num);
$(".page"+num+"_content").fadeIn();
	 
	});
   
	});
	
	$("#prev").click(function(){
		num--;
		var prevFrame="page"+num+".html";
    $(".nis_frame_emod").load(prevFrame, function( response, status, xhr ) {
		$(".counter").text(num);
		if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();}
		
		//Bullets and paragraph and animation loader//
	$(".page_content").addClass("page"+num+"_content");
		  $(".title").addClass("title"+num);
	   $(".paragraph").addClass("paragraph"+num);
	    $(".bullets").addClass("bullets"+num);
$(".page"+num+"_content").fadeIn();
		
		//end of paragraph and bulltes
	});

	});
	$("#play").click(function(){
		setInterval(function(){
		num++;
		var currentFrame="page"+num+".html";
		$(".nis_frame_emod").load(currentFrame, function( response, status, xhr ) {if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload(); }
  }).fadeIn(2000).next().end();
  
		},11000);
		});
	});
});