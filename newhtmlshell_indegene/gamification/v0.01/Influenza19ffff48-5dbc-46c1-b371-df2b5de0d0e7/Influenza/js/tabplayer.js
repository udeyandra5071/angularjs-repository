
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
   $("#tabv2_2").removeClass("activex_2");
    $("#tabv2_3").removeClass("activex_3");
	 $("#tabv2_4").removeClass("activex_4");
       $("#tabv2_5").removeClass("activex_5");
	     $("#tabv2_6").removeClass("activex_6");
   $(".data1").fadeIn();
   
});
$("#tabv2_2").bind("click",function(){
     $(this).addClass("clicked");
 $(this).addClass("activex_2");
  $("#tabv2_1").removeClass("activex_1");
   $("#tabv2_3").removeClass("activex_3");
    $("#tabv2_4").removeClass("activex_4");
   $("#tabv2_5").removeClass("activex_5");
   $("#tabv2_6").removeClass("activex_6");
    $(".nis_frame_tabMode").fadeIn();
    $(".progress").show();
    $(".data2").fadeIn();
    
    

});
$("#tabv2_3").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("activex_3");
  $("#tabv2_1").removeClass("activex_1");
   $("#tabv2_2").removeClass("activex_2");
     $("#tabv2_4").removeClass("activex_4");
   $("#tabv2_5").removeClass("activex_5");  
    $("#tabv2_6").removeClass("activex_6"); 
    $(".nis_frame_tabMode").fadeIn();
    $(".progress").show();
      $(".data3").fadeIn();

});		
$("#tabv2_4").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("activex_4");
  $("#tabv2_1").removeClass("activex_1");
   $("#tabv2_2").removeClass("activex_2");
    $("#tabv2_3").removeClass("activex_3");
     $("#tabv2_5").removeClass("activex_5");
		$("#tabv2_6").removeClass("activex_6"); 	 
	  $(".nis_frame_tabMode").fadeIn();
       $(".data4").fadeIn();

});	
$("#tabv2_5").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("activex_5");
 
  $("#tabv2_1").removeClass("activex_1");
   $("#tabv2_2").removeClass("activex_2");
    $("#tabv2_3").removeClass("activex_3");
     $("#tabv2_4").removeClass("activex_4");
	 $("#tabv2_6").removeClass("activex_6");
 $(".nis_frame_tabMode").fadeIn();	
         $(".data5").fadeIn();

});	 
$("#tabv2_6").bind("click",function(){
     $(this).addClass("clicked");
 $(this).addClass("activex_6");
  $("#tabv2_1").removeClass("activex_1");
   $("#tabv2_2").removeClass("activex_2");
    $("#tabv2_3").removeClass("activex_3");
     $("#tabv2_4").removeClass("activex_4");
	 $("#tabv2_5").removeClass("activex_5");
 $(".nis_frame_tabMode").fadeIn();	
    $(".progress").show();
          $(".data6").fadeIn();

});	 
    if($(".tab_boxv2").children(".tabs_blockf3").last().prevAll().find(".clicked"))
        {
            $(".nextFrame").removeClass("hide");
        }
});