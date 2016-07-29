
$(document).ready(function(){
	// Tab feature V1//

//  Tab feature V2//
$('.tab').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('clicked');
    if ($('.clicked').length === $('.tabs_blockf3').length) {
        //$('.submit').show();
        $(".nextFrame").text("Click/Tap forward arrow to continue");
    }
});
$("#tabv2_1").bind("click",function(){
    
    $(this).addClass("clicked");
  $(this).addClass("active");
   

});
$("#tabv2_2").bind("click",function(){
     $(this).addClass("clicked");
 $(this).addClass("active");
 
    

});
$("#tabv2_3").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("active");
  

});		
$("#tabv2_4").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("active");
 

});	
$("#tabv2_5").bind("click",function(){
     $(this).addClass("clicked"); 
 $(this).addClass("active");
 
});	 
$("#tabv2_6").bind("click",function(){
     $(this).addClass("clicked");
 $(this).addClass("active");
 

});	 
    if($(".tab_boxv2").children(".tabs_blockf3").last().prevAll().find(".clicked"))
        {
            $(".nextFrame").removeClass("hide");
        }
});