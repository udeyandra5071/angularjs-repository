(function( $ ) {
  
	$.fn.audioSlideshowTab2 = function( options ) {
      
		var settings = {
			jPlayerPath: "/lib/swf",
			suppliedFileType: "mp3",
			playSelector: ".tabplay_2",
			pauseSelector: ".tabpause_2",
			currentTimeSelector: ".play-time_2",
			durationSelector: ".total-time_2",
			playheadSelector: ".playhead_2",
			timelineSelector: ".timeline_2",
			stopSelector_tab1: ".jp-stop_2"
		};
	  
		if(options){
		  jQuery.extend(settings,options);
		}
		
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
		  
			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides-tab2').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton_tabtwo = $that.find(settings.playSelector),
				$pauseButton_tabtwo = $that.find(settings.pauseSelector),
				$stopButton_tabtwo = $that.find(settings.stopSelector_tab1),
				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton_tabtwo.hide();
				
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					idtab_two = $el.attr('id');
				
				if(index > 0){
					slideTimes.push(second);
				
					var tabtwo = '<div><div id="' + idtab_two + '"></div></div>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + tabtwo + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});

			var $jPlayerObj_tabtwo = $('<div id="jquery_jplayer_4"></div>');
			$that.append($jPlayerObj_tabtwo);
		
			$jPlayerObj_tabtwo.jPlayer({
				ready: function () {
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio')
					});
				},
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor: ""
			});
				
			$jPlayerObj_tabtwo.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
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
				
			$jPlayerObj_tabtwo.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton_tabtwo.hide();
				$pauseButton_tabtwo.show();
			});
			
			$jPlayerObj_tabtwo.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton_tabtwo.hide();
				$playButton_tabtwo.show();
			});
			
			$slides.click(function(event){
				$jPlayerObj_tabtwo.jPlayer("play");
			});
			
			$playButton_tabtwo.click(function(event){
				$jPlayerObj_tabtwo.jPlayer("play");
				$('.audio-slideshow-tab2').css({"width":"1024px","height":"514px"});
					$playButton_tabtwo.css({"width":"25px","height":"25px"});
						$pauseButton_tabtwo.css({"width":"25px","height":"25px"});
							$(".audio-control-interface-tab2").css({"bottom":"0px","position":"absolute"});
							 $(this).removeClass("tab-one-playbg");
							  $pauseButton_tabtwo.removeClass("tab-one-playbg");
								  $(".jp-stop_2").show();
									 $(this).addClass("tab-indexminus");
									  $pauseButton_tabtwo.addClass("tab-indexminus");
							       $playButton_tabtwo.removeClass("tab-indexplus");
											  $pauseButton_tabtwo.removeClass("tab-indexplus");
												 $stopButton_tabtwo.addClass("tab-indexminus");
												  $(this).addClass("play-icon");
													 $pauseButton_tabtwo.addClass("pause-icon");
													  $(".jp-stop_2").addClass("close-icon");
														
			});
				
			$pauseButton_tabtwo.click(function(event){
				$jPlayerObj_tabtwo.jPlayer("pause");
		
			});
			$stopButton_tabtwo.click(function(event){
				$jPlayerObj_tabtwo.jPlayer("stop");
				$('.audio-slideshow-tab2').css({"width":"250px","height":"50px"});
				 $(".jp-stop_2").hide();
				   $(".tabplay_2").addClass("tab-one-playbg");
					   $(".tabpause_2").addClass("tab-one-playbg");
						   $(".tabplay_2").css({"width":"250px","height":"50px"});
							    $(".tabpause_2").css({"width":"250px","height":"50px"});
									  $pauseButton_tabtwo.addClass("tab-indexplus");
										 $playButton_tabtwo.addClass("tab-indexplus");
										   $pauseButton_tabtwo.removeClass("pause-icon");
											  $playButton_tabtwo.removeClass("play-icon");
										   
				});
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj_tabtwo.jPlayer("play", t);
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