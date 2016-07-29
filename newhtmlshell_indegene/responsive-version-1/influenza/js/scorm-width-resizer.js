var supportsOrientationChange = "onorientationchange" in window,
orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
		window.addEventListener(orientationEvent, function() {
    console.log('Oreintation' + window.orientation + " " + screen.width);
		
		//alert("Screen Orientation changed. Please Confirm it to adjust the resolution = "+ screen.width);
		
			var heightmgr = $(window).height();
            console.log(heightmgr);
            $(".mainshell_ipad").css({"height":heightmgr});
	//	event.preventDefault();
		}, false);

	