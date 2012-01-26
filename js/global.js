/* Author: 
	@mykepreuss
*/

$().ready(function() {
	$('#coda-slider-1').codaSlider({
		autoHeight: false,	
		dynamicArrowLeftText: "&#171;",
		dynamicArrowRightText: "&#187;",
		dynamicTabs: false,	
	});

	function setActivePanel(){
		//Set the current active panel
		var currentURL = window.location.hash;
		if (currentURL === ''){
			$('.slideControls').find('a[href="#1"]').parent('li').addClass('current');
		} else {
			$('.slideControls').find('a[href="'+currentURL+'"]').parent('li').addClass('current');
		};

		//Change the active state of nav items	
		$('.xtrig').click(function(){
			var currentSlide = $(this).attr('href');
			$('.slideControls').find('a[href="'+currentSlide+'"]').parent('li').addClass('current').not($('a[href!="'+currentSlide+'"]').parent('li').removeClass('current'));
		});
	
		//Change the active state of nav items when prev/next buttons clicked		
		$('.coda-nav-left a, .coda-nav-right a').click(function(){
			var currentURL = window.location.hash;
			$('.slideControls').find('a[href="'+currentURL+'"]').parent('li').addClass('current').not($('a[href!="'+currentURL+'"]').parent('li').removeClass('current'));
		});
	};
	
	setActivePanel();
});






















