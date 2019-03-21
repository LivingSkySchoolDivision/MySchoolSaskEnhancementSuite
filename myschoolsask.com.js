function onError(error) {
  console.log(`Error: ${error}`);
}

function onSettingsLoaded(settings) {
	// Check if we're allowed to prevent timeouts
	if (settings.lCanPreventTimeout == true) {

		// Check if the hours are within the boundaries		
		// Hard code these boundaries for the time being - we currently don't want these to be user settable.
		var nowTime = new Date();
		var nowHour = nowTime.getHours();		

		if ((nowHour >= 8) && (nowHour <= 17)) {
			// Inject code into every page that resets the timeout
			$("body").before("<script language=\"javascript\">setInterval(function() { var d = new Date(); getParentX2Window().lastUserEvent = d.getTime(); }, 5000);</script>");
		} 
	}

	// Check if we should show the "It Works" banner
	if (settings.lShowItWorksBanner == true) {
		$("body").before("<div style=\"font-size: 8pt; margin: 0; padding: 0; width: 100%; background-color: yellow; color: black;text-align: center;font-family: sans-serif;\">MySchoolSask Enhancement Suite is able to modify the contents of this page.</div>");		 
	}
}

// Load the options and then handle the response we get back from browser storage
var savedSettings = browser.storage.sync.get();  
savedSettings.then(onSettingsLoaded, onError);
