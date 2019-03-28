var MSSES_VERSION = chrome.runtime.getManifest().version

function onSettingsLoaded(settings) {
	// Open the options screen if this is the first time the addon has been run 
	if (settings.hascompletedfirstrun != true) {
		chrome.tabs.create({
			url: chrome.runtime.getURL('./pages/options.html?justInstalled=true'),
			active: true
		});
	} else if (settings.lastversionseen != MSSES_VERSION) {
		// Check if this is a newer version than the user had installed

		// What should we do if the extension is a different version than last seen?
		
		chrome.tabs.create({
			url: chrome.runtime.getURL('./pages/options.html?justUpdated=true'),
			active: true
		});
		
	}
}

console.log("Loading MySchoolSask Enhancement Suite " + MSSES_VERSION);
var savedSettings = chrome.storage.local.get(onSettingsLoaded);  