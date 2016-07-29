  
(function( $ ) {
  var num=0;
	$.fn.audioSlideshow = function( options ) {

		var settings = {
			jPlayerPath: "/lib/swf",
			suppliedFileType: "mp3",
			playSelector: ".audio-play",
			pauseSelector: ".audio-pause",
			nextSelector: ".jp-next",
			prevSelector: ".jp-previous",
			stopSelector:".jp-stop",
			muteSelector:".jp-mute",
			unmuteSelector:".jp-unmute",
			currentTimeSelector: ".play-time",
			durationSelector: ".total-time",
			playheadSelector: ".playhead",
			timelineSelector: ".timeline",
						volumemaxSelector:".jp-volume-bar",
						volumemaxvalueSelector:"jp-volume-bar-value"
		};
	  
		if(options){
		  jQuery.extend(settings,options);
		}
			
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
	
			// Cache `this`
			var $that = $(this)
				$slides = $that.find('.audio-slides').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton = $that.find(settings.playSelector),
				$nextButton=$that.find(settings.nextSelector),
				$prevButton=$that.find(settings.prevSelector),
				$pauseButton = $that.find(settings.pauseSelector),
        $stopbutton=$that.find(settings.stopSelector),
				$mutebutton=$that.find(settings.muteSelector),
				$unmutebutton=$that.find(settings.unmuteSelector),
				$volumemaxbutton=$that.find(settings.volumemaxSelector),
				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton.hide();
				
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					thumbnail = $el.attr('id');
				
				if(index > 0){
					slideTimes.push(second);
				
					var sliderdiv = '<div><div id="' + thumbnail + '"></div>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + sliderdiv + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});

			var $jPlayerObj = $('<div id="jquery_jplayer_2" class="removeall_exceptlast"></div>');

			$that.append($jPlayerObj);

				$jPlayerObj.jPlayer({
				ready: function () {
					
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio')
					});
				},
				
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor:"#jp_container_2",
				
			});
		
				
			$jPlayerObj.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
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
				
			$jPlayerObj.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton.hide();
				$pauseButton.show();
			});
			
			$jPlayerObj.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton.hide();
				$playButton.show();
			});
		
			$slides.click(function(event){
				$jPlayerObj.jPlayer("play");
				 
			});
 //var host = location.hostname;
 // var pathname = location.pathname;		 
		$nextButton.bind("click",function(event){
				//$jPlayerObj.jPlayer("play");
				//alert("in")
							num++;	
						var nextFrame="page"+num+".html";	
				console.log(nextFrame);
				$(".nis_frame_emod").load(nextFrame, function( response, status, xhr ) {
					$(".counter").text(num);
					if ( status == "error" ) {
				var msg = "Sorry no page found ";console.log( msg + xhr.status + " " + xhr.statusText );//location.reload();
					}
				 $(".page_content").addClass("page"+num+"_content");
				  $(".title").addClass("title"+num);
				   $(".paragraph").addClass("paragraph"+num);
					$(".bullets").addClass("bullets"+num);
					//$('.audiotranscript').html('<i class="audiotranscript1 material-icons white-text center fonter" >reorder</i>');
					//Code for transcript//
					$(".transcript_box").hide();
					$(".audiotran_text").empty();
					$('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id'+num+'">speaker_notes</i>');
					//Code for transcript//
					
			//$(".audio-play").fadeIn();
				$("#audio-slideshow").attr("data-audio", "audio/f"+num+".mp3");
			//$("audio").attr("src", "audio/f"+num+".mp3");

			$('.removeall_exceptlast:not(:first)').remove();
						$(".audio-pause").fadeIn();
							$(".audio-play").hide();
			//$("audio").attr('autoplay','autoplay');
			$(".page"+num+"_content").fadeIn();
				
				});

		});
	
			$prevButton.bind("click",function(event){
				$jPlayerObj.jPlayer("play");
				$(".audio-pause").fadeIn();
				$(".audio-play").hide();
					num--;								
		var prevFrame="page"+(num)+".html";

    $(".nis_frame_emod").load(prevFrame, function( response, status, xhr ) {
		$(".counter").text(num);
		if ( status == "error" ) {
    var msg = "Sorry no page found ";console.log( msg + xhr.status + " " + xhr.statusText );//location.reload();
		}
	 $(".page_content").addClass("page"+num+"_content");
	  $(".title").addClass("title"+num);
	   $(".paragraph").addClass("paragraph"+num);
	    $(".bullets").addClass("bullets"+num);
		//$('.audiotranscript').html('<i class="audiotranscript1 material-icons white-text center fonter" >reorder</i>');
		//Code for transcript//
		$(".transcript_box").hide();
		$(".audiotran_text").empty();
		$('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id'+num+'">speaker_notes</i>');
		//Code for transcript//
		
//$(".audio-play").fadeIn();
	$("#audio-slideshow").attr("data-audio", "audio/f"+num+".mp3");
//$("audio").attr("src", "audio/f"+num+".mp3");

$('.removeall_exceptlast:not(:first)').remove();
			$(".audio-pause").fadeIn();
				$(".audio-play").hide();
//$("audio").attr('autoplay','autoplay');
$(".page"+num+"_content").fadeIn();
	
	});
	
				
			});
			$playButton.click(function(event){
				$jPlayerObj.jPlayer("play");
				$(".jp-mute").show();
				$(".audio-pause").fadeIn();
				$(".nis_frame_emod").load("page"+num+".html",function(){
		$(".counter").text(num);
		$('.removeall_exceptlast:not(:first)').remove();
		});
				$(".launch").hide();
				$(".audio-pause").fadeIn();
				$(".audio-play").hide();
						
						
				$(".launchbox").css({"display":"none"});
				$(this).css({"background":"url(http://localhost/newhtmlshell_indegene/images/play_change.png)"});
			$(this).css({"background-repeat":"no-repeat"});
			$(this).css({"background-position":"center"});
			$(this).css({"width":"33px"});
			$(this).css({"height":"33px"});
			$(this).css({"left":"6rem"});
			$(this).css({"top":"10rem"});
				$pauseButton.css({"background-repeat":"no-repeat"});
			$pauseButton.css({"background-position":"center"});
			$pauseButton.css({"width":"33px"});
			$pauseButton.css({"height":"33px"});
			$pauseButton.css({"left":"6rem"});
			$pauseButton.css({"top":"10rem"});
				$stopbutton.show();
			});

			$pauseButton.click(function(event){
				$jPlayerObj.jPlayer("pause");
				$(".audio-pause").hide();
				$(".audio-play").fadeIn();
			});
			$stopbutton.click(function(event){
					$jPlayerObj.jPlayer("stop");
				$(this).css({"background-repeat":"no-repeat"});
			$(this).css({"background-position":"center"});
			$(this).css({"width":"33px"});
			$(this).css({"height":"33px"});
			$(this).css({"left":"8.5rem"});
			$(this).css({"top":"10rem"});
				});
				$volumemaxbutton.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;
			});
				
				
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj.jPlayer("play", t);
			});
			//Tab event
			
				
				//Tab event ends
	setAudioSlide(0);
			
			function setAudioSlide(n){
				if(n != currentSlide){
					if($slides.get(currentSlide)){
						$($slides.get(currentSlide)).hide();
					}

					$($slides.get(n)).show();
					currentSlide = n;
				}
			}
				
		});
	};
}(jQuery));