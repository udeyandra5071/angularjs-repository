function set_body_height() { // set body height = window height
				    $('body').width($(window).width());
					$('body').height($(window).height());
                    $('html').width($(window).width());
					$('html').height($(window).height());
                    $('.mainshell_ipad').width($(window).width());
					$('.mainshell_ipad').height($(window).height());
                    $('.widthoverlay').width($(window).width());
                    $('.launch_wrapper').width($(window).width());
					$('.widthoverlay').height($(window).height());
					$('.launch_wrapper').height($(window).height());
}

			$(document).ready(function() {
				$(window).bind('resize', set_body_height);
				set_body_height();
			});
