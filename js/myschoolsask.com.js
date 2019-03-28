function logMsg(msg) {
	console.log("MSSES: " + msg);
}

function onSettingsLoaded(settings) {
	
	// Check if we should adjust the timeout
	if (settings.sTimeoutOverrideMode == "disabletimeout") {

		// Inject code into every page that resets the timeout at an interval
		logMsg("Disabling timeout");
		$("body").before("<script language=\"javascript\">setInterval(function() { var d = new Date(); getParentX2Window().lastUserEvent = d.getTime(); }, 5000);</script>");		 
	
	} else if (settings.sTimeoutOverrideMode == "override") {

		// Override the timeoutDuration variable with our own value
		// Get the timeout value

		// New value of timeout in milliseconds
		var iNewTimeoutValue = 1800000; 

		switch(settings.iNewTimeoutLength) {
			case 30 :
				iNewTimeoutValue = 1800000; // 30 minutes
				break;
			case 60 :
				iNewTimeoutValue = 3600000; // 1 hour
				break;
			case 120 :
				iNewTimeoutValue = 7200000; // 2 hours
				break;
			case 240 :
				iNewTimeoutValue = 14400000; // 4 hours
				break;
			case 360 :
				iNewTimeoutValue = 21600000; // 6 hours
				break;
			default: 
				iNewTimeoutValue = 1800000; // 30 minutes by default
				break;
		} 

		$("head").after("<script language=\"javascript\">getParentX2Window().timeoutDuration = " + iNewTimeoutValue + "; getParentX2Window().sessionTimeout = " + iNewTimeoutValue + " + new Date().getTime();</script>");		 

		logMsg("overriding session timeout to: " + iNewTimeoutValue + "ms");
	}

	// Check if we should show the "It Works" banner
	if (settings.lShowItWorksBanner == true) {
		logMsg("It works!");
		$("body").before("<div style=\"font-size: 8pt; margin: 0; padding: 0; width: 100%; background-color: yellow; color: black;text-align: center;font-family: sans-serif;\">MySchoolSask Enhancement Suite is able to modify the contents of this page.</div>");		 
	}

}

// Load the options and then handle the response we get back from browser storage
var savedSettings = chrome.storage.sync.get(onSettingsLoaded);  
