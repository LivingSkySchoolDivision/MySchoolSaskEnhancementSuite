/*
 * ====================================================================
 *
 * Living Sky School Division
 *
 * Copyright (c) 2019 Living Sky School Division
 * All rights reserved.
 *
 * ====================================================================
 */

function logMsg(msg) {
	console.log("MSSES: " + msg);
}

function getAddedByMSSESBadgeHTML() {
	return "<div style=\"vertical-align: middle;display: inline-block; color: white;font-weight: bold;font-size: 7pt;border: 2px solid #086a39; height: 20px;border-radius: 5px; background-color: #086a39;min-width: 150px;\"><img style=\"border: 0; padding-right: 5px; border-right: 1px solid rgba(255,255,255,0.3);vertical-align: middle;width: 20px; height: 20px; float: left; margin-left: 3px; margin-right: 3px;\" src=\" data:image/png;base64,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\">Added by <br/>MSS Enhancement Suite</div>";
}

function insertYOGGradeSelector(settings) {
// Check if we're on the promote/demote page
	if (
		(document.title.toLowerCase().includes("promote/demote student")) ||
		(document.title.toLowerCase().includes("student registration"))
		) {

		// Check to see if the YOG element exists on the page
		if($("#gradeLevelInput").length) {
			logMsg("Inserting YOG Grade selector (Promote/Demote Wizard)");
			// YOG is always the year that june is in
			// If the month is between 8(-1) and 12(-1), add one

			var formName = "UNKNOWN-DOES-NOT-EXIST";
			var yogFieldName = "UNKNOWN-DOES-NOT-EXIST";

			if (document.title.toLowerCase().includes("promote/demote student")) {
				formName = "statusChangeForm";
				yogFieldName = "yog";
			}

			if (document.title.toLowerCase().includes("student registration")) {
				formName = "wizardForm";
				yogFieldName = "value(stdYog)";
			}

			// Inject some YOG helpers
			$("#gradeLevelInput").parent().parent().parent().parent().parent().parent().before(
				"<tr><td class=\"detailProperty headerLabelBackground\">" +
				"<b style=\"color: #086a39;\">Grade<span class=\"requiredFieldFlag\">&nbsp;*</span></td><td class=\"detailValue\">" +
				"<script language=\"javascript\">" +
				"function mssesUpdateGradeDropdownFromYOG() {" +
				"  try {" +
				"    var form = document.forms['" + formName + "'];" +
				"    var yogValue = form.elements['" + yogFieldName + "'].value;" +
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
				" var form = document.forms['" + formName + "'];" +
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
				" form.elements['" + yogFieldName + "'].value = newYog; " +
				" var event = new Event('change'); " +
				" form.elements['" + yogFieldName + "'].dispatchEvent(event); " +
				" return true;} " +
				" $(document).ready(function() { mssesUpdateGradeDropdownFromYOG(); });" +
				"</script>" +
				"<select id=\"mssesGradeDropdown\" onChange=\"mssesUpdateYog();\"><option>PLEASE SELECT</option><option>Pre-K (Year 1/2)</option><option>Pre-K (Year 2/2)</option><option>Pre-K</option><option>Kindergarten</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option><option>Grade 8</option><option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option></select>" +
				" &nbsp; " + getAddedByMSSESBadgeHTML() + 
				"</td></tr>"
				);
		}
	}
}

function hideYOGFields(settings) {
	// Only do this if we are also inserting grade selector, so we dont break the form
	if (settings.lShowYOGGradeDropdowns == true) {

		// Make sure we're on the right page
		if (
			(document.title.toLowerCase().includes("student registration")) ||
			(document.title.toLowerCase().includes("promote/demote student"))
			) {
			logMsg("Hiding YOG settings row");

			// Hide the existing grade and YOG fields
			$("#gradeLevelInput").parent().parent().parent().parent().parent().parent().hide();
		}
	}
}

function disableTimeout(settings) {
	// We may need to periodically call tickleServer(); (from mss common.js) to keep the server up to date

	// Inject code into every page that resets the timeout at an interval
	logMsg("Disabling timeout");
	$("body").before("<script language=\"javascript\">setInterval(function() { var d = new Date(); getParentX2Window().lastUserEvent = d.getTime(); }, 5000);</script>");
}

function overrideTimeout(settings) {
	// Create our own activity timer
	// Supress the built in activity timer by constantly pusing the current timestamp to it
	// When _our_ activity timer expires:
	//  - Stop supressing the builtin one
	//  - Reset the builtin values so that they are obviously expired
	//  - Wait for the next builtin timer check to expire the session for us

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

	// Do we need to periodically call tickleServer() to keep the session alive on the server side?

	$("body").after("" +
		"<script type=\"text/javascript\">" +
		" var mssesSupressMSSTimeout = true; " +
		" var mssesLastUserEvent = new Date().getTime(); " +
		" function mssesGetLastActivity() { return getParentX2Window().mssesLastUserEvent; } " +
		" function mssesUpdateLastActivity() { getParentX2Window().mssesLastUserEvent = new Date().getTime(); } " +
		" function mssesCheckLastActivity() { " +
		"   var msSinceLastActivity = (new Date().getTime() - mssesGetLastActivity()); " +
		"   var msUntilSessionTimeout = " + iNewTimeoutValue + " - msSinceLastActivity; " +
		"   if (msSinceLastActivity > " + iNewTimeoutValue + ") { " +
		"      console.log('MSSES: Session timeout exceeded " + iNewTimeoutValue + "ms - expiring session, no longer supressing builtin timeouts. MSS should automatically timeout shortly.');" +
		"      getParentX2Window().mssesSupressMSSTimeout = false; " +
		"      getParentX2Window().lastUserEvent = 1;" +
		"      getParentX2Window().sessionTimeout  = 1;" +
		"      getParentX2Window().timeoutDuration  = 1;" +
		"   } " +
		" } " +
		" $(document).keydown(function() { mssesUpdateLastActivity(); } ); " +
		" $(document).click(function() { mssesUpdateLastActivity(); } ); " +
		" setInterval(function() { mssesCheckLastActivity(); }, 11000);" +
		" setInterval(function() { if (getParentX2Window().mssesSupressMSSTimeout == true) { getParentX2Window().lastUserEvent = new Date().getTime(); }}, 10000);" +
		"</script>" +
		"");

	logMsg("overriding session timeout to: " + iNewTimeoutValue + "ms");
}

function showItWorksBanner(settings) {
	logMsg("It works!");
	$("body").before("<div style=\"font-size: 8pt; margin: 0; padding: 0; width: 100%; background-color: yellow; color: black;text-align: center;font-family: sans-serif;\">MySchoolSask Enhancement Suite is able to modify the contents of this page.</div>");
}

function enableShiftClickCheckboxes(settings) {
	logMsg("Enabling shift+clicking checkboxes");
	$("body").after("<script type=\"text/javascript\">" +
	    "const allCheckBoxes = Array.from(document.querySelectorAll('[type=\"checkbox\"]'));" +
	    "let lastCheckedBox;" +
	    "function changeBox(event) { if (event.shiftKey && this != lastCheckedBox) { checkIntermediateBoxes(lastCheckedBox, this); } lastCheckedBox = this; } " +
	    "function checkIntermediateBoxes(first, second) { if (allCheckBoxes.indexOf(first) > allCheckBoxes.indexOf(second)) { [second, first] = [first, second]; }  intermediateBoxes(first, second).forEach(box => $('#' + box.id).click()); } " +
	    "function intermediateBoxes(start, end) { return allCheckBoxes.filter((item, key) => { return allCheckBoxes.indexOf(start) < key && key < allCheckBoxes.indexOf(end); }); } " +
	    "allCheckBoxes.forEach(item => item.addEventListener('click', changeBox));  " +
	    "</script>");
}

function onSettingsLoaded(settings) {
	// Don't load any of this stuff on the login screen
	if (!document.title.toLowerCase().includes("log on")) {

		// Check if we should adjust the timeout
		if (settings.sTimeoutOverrideMode == "disabletimeout") {
			disableTimeout(settings);
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

	 	// Check if we should enable shift+clicking checkboxes
	 	if (settings.lEnableCheckboxMultiSelect == true) {
	 		enableShiftClickCheckboxes(settings);
	 	}


 	} else {
 		logMsg("Supressing all enhancements on login screen");
 	}
}

// Load the options and then handle the response we get back from browser storage
var savedSettings = chrome.storage.sync.get(onSettingsLoaded);
