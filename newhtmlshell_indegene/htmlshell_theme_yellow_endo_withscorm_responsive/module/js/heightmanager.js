function set_body_height() { // set body height = window height
				
					$('.mainshell_ipad').height($(window).height());
    //$('.height2').height($(window).height());
    $(".launch_wrapper").height($(window).height());
  $(".preloader-box").height($(window).height());
  //  $('.audio-slideshow').height($(window).height());
			}
			$(document).ready(function() {
				$(window).bind('resize', set_body_height);
				set_body_height();
			});
