function logMsg(msg) {
	console.log("MSSES: " + msg);
}

function insertYOGGradeSelector(settings) {	
	// Check if we're on the student registration page
	if (document.title.toLowerCase().includes("student registration")) {
		// Check to see if the YOG element exists on the page
		if($("#gradeLevelInput").length) {
			logMsg("Inserting YOG Grade selector");
			// YOG is always the year that june is in
			// If the month is between 8(-1) and 12(-1), add one

			// Inject some YOG helpers
			$("#gradeLevelInput").parent().parent().parent().parent().parent().parent().before(
				"<tr><td class=\"detailProperty headerLabelBackground\">" + 
				"<b style=\"color: #086a39;\">Grade<span class=\"requiredFieldFlag\">&nbsp;*</span></td><td class=\"detailValue\">" + 
				"<script language=\"javascript\">" +
				"function mssesUpdateGradeDropdownFromYOG() {" +
				"  try {" + 
				"    var form = document.forms['wizardForm'];" +
				"    var yogValue = form.elements[\"value(stdYog)\"].value;" +
				"    if (yogValue != '') {" +
				"      var yogValueInt =  parseInt(yogValue);" +
				"      if (yogValueInt > 0) { " +
				"        var newSelectedIndex = 0;" +
				"        var d = new Date(); " +
				"        var currentSchoolYear = d.getFullYear();" +
				"        var curMonth = d.getMonth; " +
				"        if ((curMonth >= 7) && (curMonth <= 11)) { newYog + 1; }" +
				"        switch(yogValueInt) {" +
				"          case (currentSchoolYear) : " +
				"            /* Grade 12 */ " +
				"            newSelectedIndex = 16;" +
				"            break;" +
				"          case (currentSchoolYear + 1) : " +
				"            /* Grade 11 */ " +
				"            newSelectedIndex = 15;" +
				"            break;" +
				"          case (currentSchoolYear + 2) : " +
				"            /* Grade 10 */ " +
				"            newSelectedIndex = 14;" +
				"            break;" +
				"          case (currentSchoolYear + 3) : " +
				"            /* Grade 9 */ " +
				"            newSelectedIndex = 13;" +
				"            break;" +
				"          case (currentSchoolYear + 4) : " +
				"            /* Grade 8 */ " +
				"            newSelectedIndex = 12;" +
				"            break;" +
				"          case (currentSchoolYear + 5) : " +
				"            /* Grade 7 */ " +
				"            newSelectedIndex = 11;" +
				"            break;" +
				"          case (currentSchoolYear + 6) : " +
				"            /* Grade 6 */ " +
				"            newSelectedIndex = 10;" +
				"            break;" +
				"          case (currentSchoolYear + 7) : " +
				"            /* Grade 5 */ " +
				"            newSelectedIndex = 9;" +
				"            break;" +
				"          case (currentSchoolYear + 8) : " +
				"            /* Grade 4 */ " +
				"            newSelectedIndex = 8;" +
				"            break;" +
				"          case (currentSchoolYear + 9) : " +
				"            /* Grade 3 */ " +
				"            newSelectedIndex = 7;" +
				"            break;" +
				"          case (currentSchoolYear + 10) : " +
				"            /* Grade 2 */ " +
				"            newSelectedIndex = 6;" +
				"            break;" +
				"          case (currentSchoolYear + 11) : " +
				"            /* Grade 1 */ " +
				"            newSelectedIndex = 5;" +
				"            break;" +
				"          case (currentSchoolYear + 12) : " +
				"            /* Grade K */ " +
				"            newSelectedIndex = 4;" +
				"            break;" +
				"          case (currentSchoolYear + 13) : " +
				"            /* Grade PK or PK 2/2 */ " +
				"            newSelectedIndex = 3;" +
				"            break;" +
				"          case (currentSchoolYear + 14) : " +
				"            /* Grade PK 1/2 */ " +
				"            newSelectedIndex = 1;" +
				"            break;" +
				"        }" +
				"        if (newSelectedIndex > 0) { form.elements[\"mssesGradeDropdown\"].selectedIndex = newSelectedIndex; }" +
				"      }" +
				"    }" +
				"  } catch {} " +
				"}" +
				"function mssesUpdateYog(grade) { " +
				" try { " +
				" var form = document.forms['wizardForm'];" +
				" var d = new Date(); " +
				" var newYog = d.getFullYear();" +
				" var curMonth = d.getMonth; " +
				" if ((curMonth >= 7) && (curMonth <= 11)) { newYog + 1; }" +
				" var yogYearAdjust = 0; " +
				" switch(form.elements[\"mssesGradeDropdown\"].value) { " +
				"   case \"12\" : " +
				"     yogYearAdjust = 0;" +
				"     break;" +
				"   case \"Grade 11\" : " +
				"     yogYearAdjust = 1;" +
				"     break;" +
				"   case \"Grade 10\" : " +
				"     yogYearAdjust = 2;" +
				"     break;" +
				"   case \"Grade 9\" : " +
				"     yogYearAdjust = 3;" +
				"     break;" +
				"   case \"Grade 8\" : " +
				"     yogYearAdjust = 4;" +
				"     break;" +
				"   case \"Grade 7\" : " +
				"     yogYearAdjust = 5;" +
				"     break;" +
				"   case \"Grade 6\" : " +
				"     yogYearAdjust = 6;" +
				"     break;" +
				"   case \"Grade 5\" : " +
				"     yogYearAdjust = 7;" +
				"     break;" +
				"   case \"Grade 4\" : " +
				"     yogYearAdjust = 8;" +
				"     break;" +
				"   case \"Grade 3\" : " +
				"     yogYearAdjust = 9;" +
				"     break;" +
				"   case \"Grade 2\" : " +
				"     yogYearAdjust = 10;" +
				"     break;" +
				"   case \"Grade 1\" : " +
				"     yogYearAdjust = 11;" +
				"     break;" +
				"   case \"Kindergarten\" : " +
				"     yogYearAdjust = 12;" +
				"     break;" +
				"   case \"Pre-K\" : " +
				"     yogYearAdjust = 13;" +
				"     break;" +
				"   case \"Pre-K (Year 2/2)\" : " +
				"     yogYearAdjust = 13;" +
				"     break;" +
				"   case \"Pre-K (Year 1/2)\" : " +
				"     yogYearAdjust = 14;" +
				"     break;" +
				"   default : " +
				"     yogYearAdjust = 0;" +
				"     break;" +
				" } " +
				" newYog = newYog + yogYearAdjust;" +
				" form.elements[\"value(stdYog)\"].value = newYog;" +
				" var event = new Event('change'); " +
			" form.elements[\"value(stdYog)\"].dispatchEvent(event); " +
				" } catch {} " +
				" return true;} " +
				" $(document).ready(function() { mssesUpdateGradeDropdownFromYOG(); });" +
				"</script>" +
				"<select id=\"mssesGradeDropdown\" onChange=\"mssesUpdateYog();\"><option>PLEASE SELECT</option><option>Pre-K (Year 1/2)</option><option>Pre-K (Year 2/2)</option><option>Pre-K</option><option>Kindergarten</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option><option>Grade 8</option><option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option></select>" +
				" &nbsp; <sup><i style=\"color: #086a39;\">*Grade field made possible by MySchoolSask Enhancement Suite</i></sup>" +
				"</td></tr>" 					
				);

		}
	}
}

function hideYOGFields(settings) {
	// Only do this if we are also inserting grade selector, so we dont break the form
	if (settings.lShowYOGGradeDropdowns == true) {
		logMsg("Hiding YOG settings row");

		// Hide the existing grade and YOG fields
		$("#gradeLevelInput").parent().parent().parent().parent().parent().parent().hide();
	}
}

function disableTimeout(settings) {
	// Inject code into every page that resets the timeout at an interval
	logMsg("Disabling timeout");
	$("body").before("<script language=\"javascript\">setInterval(function() { var d = new Date(); getParentX2Window().lastUserEvent = d.getTime(); }, 5000);</script>");		 
}

function overrideTimeout(settings) {
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

function showItWorksBanner(settings) {
	logMsg("It works!");
	$("body").before("<div style=\"font-size: 8pt; margin: 0; padding: 0; width: 100%; background-color: yellow; color: black;text-align: center;font-family: sans-serif;\">MySchoolSask Enhancement Suite is able to modify the contents of this page.</div>");		 
}

function onSettingsLoaded(settings) {
	
	// Check if we should adjust the timeout
	if (settings.sTimeoutOverrideMode == "disabletimeout") {
		disabletimeout(settings);
	} else if (settings.sTimeoutOverrideMode == "override") {
		overrideTimeout(settings);
	}

	// Check if we should show the "It Works" banner
	if (settings.lShowItWorksBanner == true) {
		showItWorksBanner(settings);
	}
	
	if (settings.lHideYOGRow == true) {
		hideYOGFields(settings);
	}

	// Check if we should insert some YOG helpers
	if (settings.lShowYOGGradeDropdowns == true) {
 		insertYOGGradeSelector(settings);
 	}
}

// Load the options and then handle the response we get back from browser storage
var savedSettings = chrome.storage.sync.get(onSettingsLoaded);  
