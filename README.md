# jQuery fullscreen event plugin

This plugin provides a technique for detecting if a browser is in fullscreen mode.

# Usage

Add `jQuery` and `jquery.fullscreen.js` to your HTML document. No explicit initialization is required, this plugin handles that automatically. Afterwards, bind a fullscreen event to the `window` object. Example:

	$(window).bind("fullscreen-on", function(e) {
		console.log("we're on fullscreen now");
	});

The following events are provided:

* `fullscreen-toggle` is triggered whenever the fullscreen state changes. The event handling function takes the following form:
		
		$(window).bind("fullscreen-toggle", function(e, state) {
			...
		});

	where `state` represents the fullscreen state as a `boolean` value;

* `fullscreen-on` is triggered when the browser enters fullscreen;
* `fullscreen-off` is triggered when the browser exits fullscreen.

If you need to check the current fullscreen state, grab the `fullscreen-state` data property from the `window` object, as follows:

	var isFullScreen = $(window).data('fullscreen-state');


The `example.html` document details examples for all events.

# Caveats

* There is no cross-browser way to programmatically trigger the fullscreen state.
* This has only been tested in Google Chrome and Firefox. Support for more browsers is coming soon.