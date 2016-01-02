jQuery( document ).ready( function( $ ){

	setupIntro(); // On ready, resize intro

	//Short function to listen for window resizes
	var addEvent = function(object, type, callback) {
	    if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {
	        object.addEventListener(type, callback, false);
	    } 
	    else if (object.attachEvent) {
	        object.attachEvent("on" + type, callback);
	    } 
	    else {
	        object["on"+type] = callback;
	    }
	};

	$( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );
		var titleBox = $( '.info').find('.container');
		$( '.info' ).find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 2) + 'px' );
	}

	// Making navigation sticky on scroll

	$( '#nav' ).sticky( { topSpacing:10 } );

	$( '#nav ul' ).onePageNav( { scrollSpeed: 400 } );

	$(window).scroll(function(){
		if($(window).scrollTop() < $(window).height()/2) {
			$('#nav').find('li').removeClass('current');
		}
	});
    
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var ratio = windowWidth/windowHeight;
    var backUndo; //tracks if moving between backstretch and normal image (refresh required to undo backstretch changes)
    var rotate; //detects if 'rotating' page on mobile (doesn't actually use the rotate check, just looks at aspect ratio)

    //Used for building image at the top of the page (different aspect ratios require different representations to keep entire face on page)
    function buildIntro() {
    	windowWidth = $(window).width();
    	windowHeight = $(window).height();
    	ratio = windowWidth/windowHeight;

    	//Display just name and blue background on small windows and mobile devices
		if (windowWidth < 750) {
			$( '#intro1').show();
			$( '#img1').hide();
		}

		//Use backstretch package to fill entire browser window when a certain aspect ratio is met
		if (ratio > 1.31 && windowWidth > 750) {
			$( '.fx-backstretch' ).find( '.info' ).backstretch("assets/img/main.jpg"); // Replace backstrech.jpg with your own image if needed
			$( '#intro1').hide();
			$( '#img1').hide();
			backUndo = true;
			rotate = true;
		}

		//if aspect ratio is not met for full view, show a standard html image
		if ((ratio < 1.31) && windowWidth > 750) {
			if(backUndo){
				location.reload();
				backUndo=false;
			}
			$( '#intro1').hide();
			$( '#img1').show();
		}
	}
   
	buildIntro();

	addEvent(window, "resize", buildIntro);


});