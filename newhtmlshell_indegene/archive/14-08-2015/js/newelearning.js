$(document).ready(function() {
	
$(".audiotranscript").bind("click",function(){
	
	$(".transcript_box").fadeIn();
});

	$(".closer").bind("click",function(){
		
		$(".close").hide();
		$(".popupbox").hide();
		
	});
		$(".closeres").bind("click",function(){
		
		$(".closeres").hide();
		$("#resourceloader").hide();
	});
	$(".cleaner").bind("click",function(){
		
		$(".loadlink").empty();
		$(".loadglossary").empty();
	});
	
$(".launch").fadeIn();
/*$("#audio-play").click(function(){*/

	$(".nis_wrapper_emod").show();
	$(".logout").click(function(){
	window.top.close();
	});
	//$('.audiotranscript').html('<i class="audiotranscript1 material-icons white-text center fonter" >reorder</i>');
	
	 $('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id1">speaker_notes</i>');
	$(".nis_frame_emod").load("page1.html",function(){
		$(".counter").text(num);
		$(".page_content").addClass("page1_content");
		
		// effects and bullet animations
		$(".page1_content").fadeIn();
		
		//End of bullets and animation
		});
	
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
		//$('.audiotranscript').html('<i class="audiotranscript1 material-icons white-text center fonter" >reorder</i>');
		//Code for transcript//
		$(".transcript_box").hide();
		$(".audiotran_text").empty();
		$('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id'+num+'">speaker_notes</i>');
		//Code for transcript//
		
$(".audio-play").fadeIn();
	$("#audio-slideshow").attr("data-audio", "audio/f"+num+".mp3");
$("audio").attr("src", "audio/f"+num+".mp3");
$('.removeall_exceptlast:not(:first)').remove();
 $("audio").attr('autoplay','autoplay');
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
		
		$(".transcript_box").hide();
		$(".audiotran_text").empty();
		//$('.audiotranscript').html('<i class="audiotranscript1 material-icons white-text center fonter" >reorder</i>');
		$('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id'+num+'">speaker_notes</i>');
		$("#audio-slideshow").attr("data-audio", "audio/f"+num+".mp3");
		$(".audio-play").fadeIn();
		$("#audio-slideshow").attr("data-audio", "audio/f"+num+".mp3");
		$("audio").attr("src", "audio/f"+num+".mp3");
		
		$('.remove_if_more_than_one:not(:last)').remove();
		 $("audio").attr('autoplay','autoplay');
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
/*	});*/

	
});