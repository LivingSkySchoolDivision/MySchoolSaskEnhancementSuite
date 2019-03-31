function logMsg(msg) {
  console.log("MSSES: " + msg);
}

function enableTimeoutOptions() {
  $("#rdbNewTimeoutLength_30").prop("disabled", false);
  $("#rdbNewTimeoutLength_60").prop("disabled", false);
  $("#rdbNewTimeoutLength_120").prop("disabled", false);
  $("#rdbNewTimeoutLength_240").prop("disabled", false);
  $("#rdbNewTimeoutLength_360").prop("disabled", false);
}

function disableTimeoutOptions() {
  $("#rdbNewTimeoutLength_30").prop("disabled", true);
  $("#rdbNewTimeoutLength_60").prop("disabled", true);
  $("#rdbNewTimeoutLength_120").prop("disabled", true);
  $("#rdbNewTimeoutLength_240").prop("disabled", true);
  $("#rdbNewTimeoutLength_360").prop("disabled", true);
}

$("#rdbNewTimeoutLength_30").on('change', function() {
  chrome.storage.sync.set({
    iNewTimeoutLength: 30
  });
});

$("#rdbNewTimeoutLength_60").on('change', function() {
  chrome.storage.sync.set({
    iNewTimeoutLength: 60
  });
});

$("#rdbNewTimeoutLength_120").on('change', function() {
  chrome.storage.sync.set({
    iNewTimeoutLength: 120
  });
});

$("#rdbNewTimeoutLength_240").on('change', function() {
  chrome.storage.sync.set({
    iNewTimeoutLength: 240
  });
});

$("#rdbNewTimeoutLength_360").on('change', function() {
  chrome.storage.sync.set({
    iNewTimeoutLength: 360
  });
});

$("#rdbTimeoutOverrideMode_Disable").on('change', function() {
  disableTimeoutOptions();
  chrome.storage.sync.set({
    sTimeoutOverrideMode: "disabletimeout"
  });
});

$("#rdbTimeoutOverrideMode_Override").on('change', function() {
  enableTimeoutOptions();

  chrome.storage.sync.set({
    sTimeoutOverrideMode: "override"
  });
});

$("#rdbTimeoutOverrideMode_None").on('change', function() {
  disableTimeoutOptions();
  chrome.storage.sync.set({
    sTimeoutOverrideMode: "nooverride"
  });

});

$("#chkShowItWorks").on('change', function() {
  chrome.storage.sync.set({
    lShowItWorksBanner: document.querySelector("#chkShowItWorks").checked
  });
});

$("#chkShowGradeDropdownOnRegWizard").on('change', function() {
  var showGradeDropdown = document.querySelector("#chkShowGradeDropdownOnRegWizard").checked || false;
  chrome.storage.sync.set({
    lShowYOGGradeDropdowns: showGradeDropdown
  });

  $("#chkHideYearofGraduationFields").prop("disabled", !showGradeDropdown);

});

$("#chkHideYearofGraduationFields").on('change', function() {
  var hideYOGRow = document.querySelector("#chkHideYearofGraduationFields").checked || false;
  chrome.storage.sync.set({
    lHideYOGRow: hideYOGRow
  });
});

$("#chkShowDebugOptions").on('change', function() {
  var lShowDebugOptions = document.querySelector("#chkShowDebugOptions").checked || false;
  if (lShowDebugOptions == true) {
    $("#divDebugOptions").slideDown();
  } else {
    $("#divDebugOptions").slideUp();
  }
});


$("#btnClearLocalStorage").on('click', function() {
  logMsg("Clearing sync settings");
  chrome.storage.sync.clear();

  logMsg("Clearing local settings");
  chrome.storage.local.clear();

  alert("Extension local and sync data cleared. Note that refreshing or navigating to the options screen will automatically write settings to local and synced storage.");
});

$("#btnResetSettingsToDefault").on('click', function() {
  chrome.storage.sync.clear();
  chrome.storage.sync.set({
        lShowItWorksBanner: false,
        iNewTimeoutLength: 1800000,
        sTimeoutOverrideMode: "nooverride",
        lShowYOGGradeDropdowns: true,
        lHideYOGRow: false,
        lEnableCheckboxMultiSelect: true,
  });
  location.reload();
});

$("#chkEnableCheckboxMultiSelect").on('change', function() {
  chrome.storage.sync.set({
    lEnableCheckboxMultiSelect: document.querySelector("#chkEnableCheckboxMultiSelect").checked
  });
});

function checkDefaultSettings(settings) {
  if (settings.lShowItWorksBanner == null) {
    logMsg("Defaulting new setting \"lShowItWorksBanner\" to false");
    chrome.storage.sync.set({
        lShowItWorksBanner: false
      });
  }

  if (settings.iNewTimeoutLength == null) {
    logMsg("Defaulting new setting \"iNewTimeoutLength\" to 1800000");
    chrome.storage.sync.set({
        iNewTimeoutLength: 1800000
      });
  }

  if (settings.sTimeoutOverrideMode == null) {
    logMsg("Defaulting new setting \"sTimeoutOverrideMode\" to nooverride");
    chrome.storage.sync.set({
        sTimeoutOverrideMode: "nooverride"
      });
  }

  if (settings.lShowYOGGradeDropdowns == null) {
    logMsg("Defaulting new setting \"lShowYOGGradeDropdowns\" to true");
    chrome.storage.sync.set({
        lShowYOGGradeDropdowns: true
      });
  }

  if (settings.lHideYOGRow == null) {
    logMsg("Defaulting new setting \"lHideYOGRow\" to false");
    chrome.storage.sync.set({
        lHideYOGRow: false
      });
  }

  if (settings.lEnableCheckboxMultiSelect == null) {
    logMsg("Defaulting new setting \"lEnableCheckboxMultiSelect\" to true");
    chrome.storage.sync.set({
        lEnableCheckboxMultiSelect: true
      });
  }
}

/// Visually updates the fields on the options page to match the stored settings, or the defauls
function onSyncSettingsLoaded(settings) {
  console.log(settings);
  checkDefaultSettings(settings);

  // Debug banner
  document.querySelector("#chkShowItWorks").checked = (settings.lShowItWorksBanner || false);

  // Checkbox multiselect
  document.querySelector("#chkEnableCheckboxMultiSelect").checked = (settings.lEnableCheckboxMultiSelect || false);

  // YOG
  document.querySelector("#chkShowGradeDropdownOnRegWizard").checked = (settings.lShowYOGGradeDropdowns || false);
  document.querySelector("#chkHideYearofGraduationFields").checked = (settings.lHideYOGRow || false);
  document.querySelector("#chkHideYearofGraduationFields").disabled = !settings.lShowYOGGradeDropdowns;

  // Session timeouts
  switch(settings["sTimeoutOverrideMode"]) {
    case 'disabletimeout':
      document.querySelector("#rdbTimeoutOverrideMode_None").checked = false;
      document.querySelector("#rdbTimeoutOverrideMode_Override").checked = false;
      document.querySelector("#rdbTimeoutOverrideMode_Disable").checked = true;
      disableTimeoutOptions();
      break;
    case 'override':
      document.querySelector("#rdbTimeoutOverrideMode_None").checked = false;
      document.querySelector("#rdbTimeoutOverrideMode_Override").checked = true;
      document.querySelector("#rdbTimeoutOverrideMode_Disable").checked = false;
      enableTimeoutOptions();
      break;
    case 'nooverride':
      document.querySelector("#rdbTimeoutOverrideMode_None").checked = true;
      document.querySelector("#rdbTimeoutOverrideMode_Override").checked = false;
      document.querySelector("#rdbTimeoutOverrideMode_Disable").checked = false;
      disableTimeoutOptions();
      break;
    default:
      document.querySelector("#rdbTimeoutOverrideMode_None").checked = true;
      document.querySelector("#rdbTimeoutOverrideMode_Override").checked = false;
      document.querySelector("#rdbTimeoutOverrideMode_Disable").checked = false;
      disableTimeoutOptions();
      break;
  }

  // Session timeout values
  switch(settings["iNewTimeoutLength"]) {
    case 30 :
      document.querySelector("#rdbNewTimeoutLength_30").checked = true;
      document.querySelector("#rdbNewTimeoutLength_60").checked = false;
      document.querySelector("#rdbNewTimeoutLength_120").checked = false;
      document.querySelector("#rdbNewTimeoutLength_240").checked = false;
      document.querySelector("#rdbNewTimeoutLength_360").checked = false;
      break;
    case 60 :
      document.querySelector("#rdbNewTimeoutLength_30").checked = false;
      document.querySelector("#rdbNewTimeoutLength_60").checked = true;
      document.querySelector("#rdbNewTimeoutLength_120").checked = false;
      document.querySelector("#rdbNewTimeoutLength_240").checked = false;
      document.querySelector("#rdbNewTimeoutLength_360").checked = false;
      break;
    case 120 :
      document.querySelector("#rdbNewTimeoutLength_30").checked = false;
      document.querySelector("#rdbNewTimeoutLength_60").checked = false;
      document.querySelector("#rdbNewTimeoutLength_120").checked = true;
      document.querySelector("#rdbNewTimeoutLength_240").checked = false;
      document.querySelector("#rdbNewTimeoutLength_360").checked = false;
      break;
    case 240 :
      document.querySelector("#rdbNewTimeoutLength_30").checked = false;
      document.querySelector("#rdbNewTimeoutLength_60").checked = false;
      document.querySelector("#rdbNewTimeoutLength_120").checked = false;
      document.querySelector("#rdbNewTimeoutLength_240").checked = true;
      document.querySelector("#rdbNewTimeoutLength_360").checked = false;
      break;
    case 360 :
      document.querySelector("#rdbNewTimeoutLength_30").checked = false;
      document.querySelector("#rdbNewTimeoutLength_60").checked = false;
      document.querySelector("#rdbNewTimeoutLength_120").checked = false;
      document.querySelector("#rdbNewTimeoutLength_240").checked = false;
      document.querySelector("#rdbNewTimeoutLength_360").checked = true;
      break;
    default :
      document.querySelector("#rdbNewTimeoutLength_30").checked = true;
      document.querySelector("#rdbNewTimeoutLength_60").checked = false;
      document.querySelector("#rdbNewTimeoutLength_120").checked = false;
      document.querySelector("#rdbNewTimeoutLength_240").checked = false;
      document.querySelector("#rdbNewTimeoutLength_360").checked = false;
      break;
  }
}

function onLocalSettingsLoaded(settings) {
  console.log(settings);
  var isFirstRunText = "Yes";
  if (settings.hascompletedfirstrun == true) {
    isFirstRunText = "No";
  }

  var lastVersionSeenText = "Unknown";
  if (settings.lastversionseen != null) {
    lastVersionSeenText = "v" + settings.lastversionseen;
  }

  $("#lblFirstRun").text(isFirstRunText);
  $("#lblLastVersionSeen").text(lastVersionSeenText);

  // If this is the first time the extension has been run, indicate that we've seen the options screen
  if (settings.hascompletedfirstrun != true) {
    chrome.storage.local.set({
      hascompletedfirstrun: true
    });
  }

  // Save the last version of this addon that we've seen, so we can detect updates
  chrome.storage.local.set({
    lastversionseen: chrome.runtime.getManifest().version
  });
}

function updateFields() {
  var savedSettings = chrome.storage.local.get(onLocalSettingsLoaded);
  var savedSettings = chrome.storage.sync.get(onSyncSettingsLoaded);
}

$("#lblExtensionVersion").text("v" + chrome.runtime.getManifest().version);
document.addEventListener("DOMContentLoaded", updateFields);

// Check if we should show the "new version" or "new install" info boxes
if (window.location.href.indexOf('justInstalled=true') != -1) {
  $("#newInstallMessage").show();
}

if (window.location.href.indexOf('justUpdated=true') != -1) {
  $("#newVersionMessage").show();
}