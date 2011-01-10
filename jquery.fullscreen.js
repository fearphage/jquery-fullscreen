(function($) {
	
	var isFullScreen = function() {
		return (document.documentElement.clientHeight == screen.height && document.documentElement.clientWidth == screen.width) ||
			(window.fullScreen) ||
			(window.outerWidth == screen.width && window.outerHeight == screen.height);
	};
	
	$(window).data('fullscreen-state', isFullScreen());
	
	$(window).resize(function() {
		var fullscreenState = isFullScreen();
		
		if ($(window).data('fullscreen-state') && !fullscreenState) {
			$(window).data('fullscreen-state', fullscreenState);
			$(window).trigger('fullscreen-toggle', [false]);
			$(window).trigger('fullscreen-off');
		}
		else if (!$(window).data('fullscreen-state') && fullscreenState) {
			$(window).data('fullscreen-state', fullscreenState);
			$(window).trigger('fullscreen-toggle', [true]);
			$(window).trigger('fullscreen-on');
		}
		else {
		}
	});
	
})(jQuery);