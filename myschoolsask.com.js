function onError(error) {
  console.log(`Error: ${error}`);
}

function doPreventTimeout(options) {
	// Check if we're allowed to prevent timeouts
	if (options.lCanPreventTimeout === true) {

		// Check if the hours are within the boundaries		
		// Hard code these boundaries for the time being - we currently don't want these to be user settable.
		var nowTime = new Date();
		var nowHour = nowTime.getHours();		

		if ((nowHour >= 8) && (nowHour <= 17)) {
			// Inject code into every page that resets the timeout
			$("body").before("<script language=\"javascript\">setInterval(function() { var d = new Date(); getParentX2Window().lastUserEvent = d.getTime(); }, 5000);</script>");
		} 
	}
}

// Load the options and then handle the response we get back from browser storage
var getting = browser.storage.sync.get("lCanPreventTimeout");  
getting.then(doPreventTimeout, onError);
