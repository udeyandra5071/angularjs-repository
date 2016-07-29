$(document).ready(function(){
	// Tab feature V1//
	
	var status;
	 var count=0;
var tab1="page3a.html"; var tab2="page3b.html"; var tab3="page3c.html";

$("#tab1").bind("click",function(){
   $(".nis_frame_tabMode").load(tab1, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab1.mp3");
                   $("audio").attr("src", "audio/extra/f3tab1.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
				       var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });	 
					
	});
	 $("#tab1").addClass("activex_5");
						      $("#tab2").removeClass("activex_4");
						       $("#tab3").removeClass("activex_3");
});
$("#tab2").bind("click",function(){
	
   $(".nis_frame_tabMode").load(tab2, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab2.mp3");
                   $("audio").attr("src", "audio/extra/f3tab2.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
					  			       var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });	
							
	});
							$("#tab2").addClass("activex_4");
						      $("#tab1").removeClass("activex_5");
						       $("#tab3").removeClass("activex_3");
});
$("#tab3").bind("click",function(){
   $(".nis_frame_tabMode").load(tab3, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab3.mp3");
                   $("audio").attr("src", "audio/extra/f3tab3.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
					  var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });	
						
	});
							$("#tab3").addClass("activex_3");
						      $("#tab2").removeClass("activex_4");
						       $("#tab1").removeClass("activex_5");
});
$(".close_box").bind("click",function(){
				   $(".nis_frame_emod").load("page3.html", function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f3.mp3");
                   $("audio").attr("src", "audio/f3.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");

	});
				 });
// End of Tab feature V1//
//  Tab feature V2//
var tabv2_1="page4a.html"; var tab2_2="page4b.html"; var tab2_3="page4c.html"; var tab2_4="page4d.html";var tab2_5="page4e.html";
$("#tabv2_1").bind("click",function(){
  $(this).addClass("activex_5");
   $("#tabv2_2").removeClass("activex_4");
    $("#tabv2_3").removeClass("activex_3");
	 $("#tabv2_4").removeClass("activex_3");
       $("#tabv2_5").removeClass("activex_1");
	  $(".nis_frame_tabMode").fadeIn();
	    //$(".tab_boxv2").css({"position":"absolute"});
   $(".nis_frame_tabMode").load(tabv2_1, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab1.mp3");
                   $("audio").attr("src", "audio/extra/f3tab1.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
					 var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });	
					 
					   
	});

});
$("#tabv2_2").bind("click",function(){
 $(this).addClass("activex_4");
  $("#tabv2_1").removeClass("activex_5");
   $("#tabv2_3").removeClass("activex_3");
    $("#tabv2_4").removeClass("activex_2");
   $("#tabv2_5").removeClass("activex_1");
    $(".nis_frame_tabMode").fadeIn();
   $(".nis_frame_tabMode").load(tab2_2, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab2.mp3");
                   $("audio").attr("src", "audio/extra/f3tab2.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
					 	 var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });
                       
	});

});
$("#tabv2_3").bind("click",function(){
 $(this).addClass("activex_3");
  $("#tabv2_1").removeClass("activex_5");
   $("#tabv2_2").removeClass("activex_4");
     $("#tabv2_4").removeClass("activex_2");
   $("#tabv2_5").removeClass("activex_1");  
    $(".nis_frame_tabMode").fadeIn();
    $(".nis_frame_tabMode").load(tab2_3, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab3.mp3");
                   $("audio").attr("src", "audio/extra/f3tab3.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
                      	 var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });
	});

});		
$("#tabv2_4").bind("click",function(){
 $(this).addClass("activex_2");
  $("#tabv2_1").removeClass("activex_5");
   $("#tabv2_2").removeClass("activex_4");
    $("#tabv2_3").removeClass("activex_3");
     $("#tabv2_5").removeClass("activex_5");   
	  $(".nis_frame_tabMode").fadeIn();
    $(".nis_frame_tabMode").load(tab2_4, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab3.mp3");
                   $("audio").attr("src", "audio/extra/f3tab3.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
                      	 var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });
	});

});	
$("#tabv2_5").bind("click",function(){
 $(this).addClass("activex_1");
  $("#tabv2_1").removeClass("activex_5");
   $("#tabv2_2").removeClass("activex_4");
    $("#tabv2_3").removeClass("activex_3");
     $("#tabv2_4").removeClass("activex_2");
 $(".nis_frame_tabMode").fadeIn();	 
    $(".nis_frame_tabMode").load(tab2_5, function( response, status, xhr ) {
			if ( status == "error" ) {
			     var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();
									}
				$(".audio-pause").show();
		         $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/extra/f3tab3.mp3");
                   $("audio").attr("src", "audio/extra/f3tab3.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
                      	 var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                         paginationClickable: true
    });
	});

});	 
});