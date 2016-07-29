(function( $ ) {
  
	$.fn.audioSlideshowTab1 = function( options ) {
      
		var settings = {
			jPlayerPath: "/lib/swf",
			suppliedFileType: "mp3",
			playSelector: ".tabplay_1",
			pauseSelector: ".tabpause_1",
			currentTimeSelector: ".play-time_1",
			durationSelector: ".total-time_1",
			playheadSelector: ".playhead_1",
			timelineSelector: ".timeline_1",
			stopSelector_tab1: ".jp-stop_1"
		};
	  
		if(options){
		  jQuery.extend(settings,options);
		}
		
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
		  
			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides-tab1').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton_tabone = $that.find(settings.playSelector),
				$pauseButton_tabone = $that.find(settings.pauseSelector),
				$stopButton_tabone = $that.find(settings.stopSelector_tab1),
				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton_tabone.hide();
				
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					idtab_one = $el.attr('id');
				
				if(index > 0){
					slideTimes.push(second);
				
					var tabone = '<div><div id="' + idtab_one + '"></div></div>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + tabone + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});

			var $jPlayerObj_tabone = $('<div id="jquery_jplayer_3"></div>');
			$that.append($jPlayerObj_tabone);
		
			$jPlayerObj_tabone.jPlayer({
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
				
			$jPlayerObj_tabone.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
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
				
			$jPlayerObj_tabone.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton_tabone.hide();
				$pauseButton_tabone.show();
			});
			
			$jPlayerObj_tabone.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton_tabone.hide();
				$playButton_tabone.show();
			});
			
			$slides.click(function(event){
				$jPlayerObj_tabone.jPlayer("play");
			});
			
			$playButton_tabone.click(function(event){
				$jPlayerObj_tabone.jPlayer("play");
				$('.audio-slideshow-tab1').css({"width":"1024px","height":"570px"});
					$playButton_tabone.css({"width":"25px","height":"25px"});
						$pauseButton_tabone.css({"width":"25px","height":"25px"});
							$(".audio-control-interface-tab1").css({"bottom":"0px","position":"absolute"});
							 $(this).removeClass("tab-one-playbg");
							  $pauseButton_tabone.removeClass("tab-one-playbg");
								  $(".jp-stop_1").show();
									 $(this).addClass("tab-indexminus");
									  $pauseButton_tabone.addClass("tab-indexminus");
							       $playButton_tabone.removeClass("tab-indexplus");
											  $pauseButton_tabone.removeClass("tab-indexplus");
												 $stopButton_tabone.addClass("tab-indexminus");
												  $(this).addClass("play-icon");
													 $pauseButton_tabone.addClass("pause-icon");
													  $(".jp-stop_1").addClass("close-icon");
														  $(".audio-slideshow-tab1").css({"left":"-12px","top":"20px"});
															 $(this).css({"left":"96px","top":"24px"});	
															  $pauseButton_tabone.css({"left":"96px","top":"24px"});	
																 $(".audio-play").hide();
																  $(".audio-pause").hide();
																	 $(".audio-play").addClass("z-index_oldplayicon");
																	  $(".audio-pause").addClass("z-index_oldplayicon");
																		 $(".jp-stop_1").show();
																		  $(".timeline").hide();
																			 $(".tab-box2").hide();
															          $(".tab-box3").hide();
																				 $(".audio-play_1").css({"z-index": "5"});
																				  $(".nextFrame").hide();
																			 
														
			});
				
			$pauseButton_tabone.click(function(event){
				$jPlayerObj_tabone.jPlayer("pause");
				 $(".audio-play").hide();
				  $(".audio-pause").hide();
					 $(".audio-play").addClass("z-index_oldplayicon");
						$(".audio-pause").addClass("z-index_oldplayicon");
		
			});
			$stopButton_tabone.click(function(event){
				$jPlayerObj_tabone.jPlayer("stop");
				$('.audio-slideshow-tab1').css({"width":"250px","height":"50px"});
				 $(".jp-stop_1").hide();
				   $(".tabplay_1").addClass("tab-one-playbg");
					   $(".tabpause_1").addClass("tab-one-playbg");
						   $(".tabplay_1").css({"width":"250px","height":"50px"});
							    $(".tabpause_1").css({"width":"250px","height":"50px"});
									  $pauseButton_tabone.addClass("tab-indexplus");
										 $playButton_tabone.addClass("tab-indexplus");
										   $pauseButton_tabone.removeClass("pause-icon");
											  $playButton_tabone.removeClass("play-icon");
										     $(".audio-play").show();
				                  $(".audio-pause").show();
													 $(".audio-play").removeClass("z-index_oldplayicon");
														$(".audio-pause").removeClass("z-index_oldplayicon");
														 $playButton_tabone.css({"left":"0px","top":"0px"});
														    $pauseButton_tabone.css({"left":"0px","top":"0px"});
																  $(".audio-slideshow-tab1").css({"left":"35px","top":"30px"});	
																	 $(".timeline").show();
																	  $(".tab-box2").show();
															          $(".tab-box3").show();
																				  $playButton_tabone.hide();
																					  $pauseButton_tabone.hide();
																						 $(".audio-play").css({"background-color":"#ddd"});
																						   $(".audio-pause").css({"background-color":"#ddd"});
																							   $(".audio-play_1").css({"z-index": "6"});
																								  $(".nis_frame_emod").load("page3.html");
																									 $(".nextFrame").show();
																				 
																					 
				});
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj_tabone.jPlayer("play", t);
				$(".audio-play").hide();
				  $(".audio-pause").hide();
					 $(".audio-play").addClass("z-index_oldplayicon");
					  $(".audio-pause").addClass("z-index_oldplayicon");
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