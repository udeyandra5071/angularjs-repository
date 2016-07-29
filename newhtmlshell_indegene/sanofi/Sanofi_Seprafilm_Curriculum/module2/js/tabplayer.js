
$(document).ready(function(){
	// Tab feature V1//

//  Tab feature V2//
$('.tabs_blockf3').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('clicked');
    if ($('.clicked').length === $('.tabs_blockf3').length) {
        //$('.submit').show();
        $(".nextFrame").text("Click/Tap forward arrow to continue");
    }
});
$("#tabv2_1").bind("click",function(){    
  $(this).addClass("clicked");
  $(this).addClass("activex_1");
   $(".page_box4a").show();
   $(".page_box4b, .page_box4c, .page_box4d, .page_box4e, .page_box4f, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4a.mp3");
                   $("audio").attr("src", "audio/f4a.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});

$("#tabv2_2").bind("click",function(){
 $(this).addClass("clicked");
 $(this).addClass("activex_2");
  $(".page_box4b").show();
  $(".page_box4a, .page_box4c, .page_box4d, .page_box4e, .page_box4f, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4b.mp3");
                   $("audio").attr("src", "audio/f4b.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});

$("#tabv2_3").bind("click",function(){
$(this).addClass("clicked"); 
$(this).addClass("activex_3");
$(".page_box4c").show();
$(".page_box4a, .page_box4b, .page_box4d, .page_box4e, .page_box4f, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4c.mp3");
                   $("audio").attr("src", "audio/f4c.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	
	
$("#tabv2_4").bind("click",function(){
$(this).addClass("clicked"); 
$(this).addClass("activex_3");
$(".page_box4d").show();
$(".page_box4a, .page_box4b, .page_box4c, .page_box4e, .page_box4f, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4d.mp3");
                   $("audio").attr("src", "audio/f4d.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	

$("#tabv2_5").bind("click",function(){
$(this).addClass("clicked"); 
$(this).addClass("activex_4");
$(".page_box4e").show();
$(".page_box4a, .page_box4b, .page_box4c, .page_box4d, .page_box4f, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4e.mp3");
                   $("audio").attr("src", "audio/f4e.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	

$("#tabv2_6").bind("click",function(){
$(this).addClass("clicked"); 
$(this).addClass("activex_5");
$(".page_box4f").show();
$(".page_box4a, .page_box4b, .page_box4c, .page_box4d, .page_box4e, .page_box4g, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4f.mp3");
                   $("audio").attr("src", "audio/f4f.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	
 
$("#tabv2_7").bind("click",function(){
$(this).addClass("clicked");
$(this).addClass("activex_6");
$(".page_box4g").show();
$(".page_box4a, .page_box4b, .page_box4c, .page_box4d, .page_box4e, .page_box4f, .page_box4h").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4g.mp3");
                   $("audio").attr("src", "audio/f4g.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	

$("#tabv2_8").bind("click",function(){
$(this).addClass("clicked");
$(this).addClass("activex_7");
$(".page_box4h").show();
$(".page_box4a, .page_box4b, .page_box4c, .page_box4d, .page_box4e, .page_box4f, .page_box4g").hide();
      $('.removeall_exceptlast:not(:first)').remove();
				  $("#audio-slideshow").attr("data-audio", "audio/f4h.mp3");
                   $("audio").attr("src", "audio/f4h.mp3");
				     $("#jquery_jplayer_2").jPlayer("play");
});	

if($(".tab_boxv2").children(".tabs_blockf3").last().prevAll().find(".clicked"))
        {
            $(".nextFrame").removeClass("hide");
        }
});