(function( $ ) {
  
	$.fn.audioSlideshowTab3 = function( options ) {
      
		var settings = {
			jPlayerPath: "/lib/swf",
			suppliedFileType: "mp3",
			playSelector: ".tabplay_3",
			pauseSelector: ".tabpause_3",
			currentTimeSelector: ".play-time_3",
			durationSelector: ".total-time_3",
			playheadSelector: ".playhead_3",
			timelineSelector: ".timeline_3",
			stopSelector_tab1: ".jp-stop_3"
		};
	  
		if(options){
		  jQuery.extend(settings,options);
		}
		
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
		  
			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides-tab3').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton_tabthree = $that.find(settings.playSelector),
				$pauseButton_tabthree = $that.find(settings.pauseSelector),
				$stopButton_tabthree = $that.find(settings.stopSelector_tab1),
				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton_tabthree.hide();
				
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					idtab_three = $el.attr('id');
				
				if(index > 0){
					slideTimes.push(second);
				
					var tabthree = '<div><div id="' + idtab_three + '"></div></div>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + tabthree + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});

			var $jPlayerObj_tabthree = $('<div id="jquery_jplayer_5"></div>');
			$that.append($jPlayerObj_tabthree);
		
			$jPlayerObj_tabthree.jPlayer({
				ready: function () {
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio')
					});
				},
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor: "",
					ended : function(){
				$(".nextFrame").hide();
				 $.jPlayer.pause();
			
        }
			});
				
			$jPlayerObj_tabthree.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
				var curTime = event.jPlayer.status.currentTime;
				audioDurationinSeconds = event.jPlayer.status.duration;
				var p = (curTime / audioDurationinSeconds) * 100 + "%";

				$currentTime.text($.jPlayer.convertTime(curTime));
				$duration.text($.jPlayer.convertTime(audioDurationinSeconds));

				$playhead.width(p);

				if(slidesCount){
					var nxtSlide = 0;
					for(var i = 0; i < slidesCount; i++){
						if(slideTimes[i] < curTime){
							nxtSlide = i + 1;
						}
					}

					setAudioSlide(nxtSlide);
				}
			});
				
			$jPlayerObj_tabthree.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton_tabthree.hide();
				$pauseButton_tabthree.show();
			});
			
			$jPlayerObj_tabthree.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton_tabthree.hide();
				$playButton_tabthree.show();
			});
			
			$slides.click(function(event){
				$jPlayerObj_tabthree.jPlayer("play");
			});
			
			$playButton_tabthree.click(function(event){
				$jPlayerObj_tabthree.jPlayer("play");
				$('.audio-slideshow-tab3').css({"width":"1024px","height":"570px"});
					$playButton_tabthree.css({"width":"25px","height":"25px"});
						$pauseButton_tabthree.css({"width":"25px","height":"25px"});
							$(".audio-control-interface-tab3").css({"bottom":"7px","position":"absolute"});
							 $(this).removeClass("tab-one-playbg");
							  $pauseButton_tabthree.removeClass("tab-one-playbg");
								  $(".jp-stop_3").show();
									 $(this).addClass("tab-indexminus");
									  $pauseButton_tabthree.addClass("tab-indexminus");
							       $playButton_tabthree.removeClass("tab-indexplus");
											  $pauseButton_tabthree.removeClass("tab-indexplus");
												 $stopButton_tabthree.addClass("tab-indexminus");
												  $(this).addClass("play-icon");
													 $pauseButton_tabthree.addClass("pause-icon");
													  $(".jp-stop_3").addClass("close-icon");
														 $(".tab-box3").css({"left":"-34px","top":"42px"});
														  $(".timeline").hide();
															 $(".tab-box2").hide();
															   $(".tab-box1").hide();
																  $(this).css({"left":"96px","top":"24px"});	
															     $pauseButton_tabthree.css({"left":"96px","top":"24px"});
																	  $(".audio-play").hide();
				                  			     $(".audio-pause").hide();
																		  $(".audio-play").addClass("z-index_oldplayicon");
																		    $(".audio-pause").addClass("z-index_oldplayicon");
																				 $(".audio-play_1").css({"z-index": "5"});		
														              $(".nextFrame").hide();
			});
				
			$pauseButton_tabthree.click(function(event){
				$jPlayerObj_tabthree.jPlayer("pause");
		
			});
			$stopButton_tabthree.click(function(event){
				$jPlayerObj_tabthree.jPlayer("stop");
				$('.audio-slideshow-tab3').css({"width":"250px","height":"50px"});
				 $(".jp-stop_3").hide();
				   $(".tabplay_3").addClass("tab-one-playbg");
					   $(".tabpause_3").addClass("tab-one-playbg");
						   $(".tabplay_3").css({"width":"250px","height":"50px"});
							    $(".tabpause_3").css({"width":"250px","height":"50px"});
									  $pauseButton_tabthree.addClass("tab-indexplus");
										 $playButton_tabthree.addClass("tab-indexplus");
										   $pauseButton_tabthree.removeClass("pause-icon");
											  $playButton_tabthree.removeClass("play-icon");
												 $(".timeline").show();
												  $(".tab-box2").show();
														$(".tab-box1").show();
														 $(".tab-box3").css({"left":"185px","top":"52px"});
														  $(".audio-play").show();
				                  			$(".audio-pause").show();
																   $(".audio-play").removeClass("z-index_oldplayicon");
																		    $(".audio-pause").removeClass("z-index_oldplayicon");
																				 $playButton_tabthree.css({"left":"0px","top":"0px"});
														    					$pauseButton_tabthree.css({"left":"0px","top":"0px"});
																					  $playButton_tabthree.hide();
																					    $pauseButton_tabthree.hide();
																							  $(".audio-play").css({"background-color":"#ddd"});
																						     $(".audio-pause").css({"background-color":"#ddd"});
																								  $(".audio-play_1").css({"z-index": "6"});
																									 $(".nis_frame_emod").load("page3.html");
																									  $(".nextFrame").show();
										   
				});
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj_tabthree.jPlayer("play", t);
			});
			
			setAudioSlide(0);
			
			function setAudioSlide(n){
				if(n != currentSlide){
					if($slides.get(currentSlide)){
						$($slides.get(currentSlide)).fadeOut();
					}

					$($slides.get(n)).fadeIn();
					currentSlide = n;
				}
			}
				
		});
	};
}(jQuery));