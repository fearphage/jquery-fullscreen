(function($, documentElement, height, width) {
	
	var 
		isFullScreen = function() {
			return documentElement.clientHeight == height && documentElement.clientWidth == width;
		}
		,$window = $(window)
	;
	
	$window
		.data('fullscreen-state', isFullScreen())
		.resize(function() {
			var fullscreenState = isFullScreen();
			
			if ($window.data('fullscreen-state') && !fullscreenState) {
				$window
					.data('fullscreen-state', fullscreenState)
					.trigger('fullscreen-toggle', [false])
					.trigger('fullscreen-off')
				;
			}
			else if (!$window.data('fullscreen-state') && fullscreenState) {
				$window
					.data('fullscreen-state', fullscreenState)
					.trigger('fullscreen-toggle', [true])
					.trigger('fullscreen-on')
				;
			}
		})
	;

})(jQuery, document.documentElement, screen.height, screen.width);