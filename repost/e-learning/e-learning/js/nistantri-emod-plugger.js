$(document).ready(function() {
$("#play").tooltip();	
$(".launch").fadeIn();
$(".launch_button").click(function(){
	$(".nis_wrapper_emod").show();
	$(".logout").click(function(){
	window.top.close();
	});
	
	$(".nis_frame_emod").load("page1.html");
	$(".launch").hide();
		var num=1;
		
	$("#next").click(function(){
		num++;
		var nextFrame="page"+num+".html";
    $(".nis_frame_emod").load(nextFrame, function( response, status, xhr ) {if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();} });
    
	});
	
	$("#prev").click(function(){
		num--;
		var prevFrame="page"+num+".html";
    $(".nis_frame_emod").load(prevFrame, function( response, status, xhr ) {if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();} });

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