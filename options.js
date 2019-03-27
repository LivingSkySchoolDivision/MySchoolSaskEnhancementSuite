function onError(error) {
  console.log(`Error: ${error}`);
}

function doSave(e) {
  e.preventDefault();
  console.log("saving prevent timeout:" + document.querySelector("#chkPreventTimeout").checked);
  console.log("saving it works banner: " + document.querySelector("#chkShowItWorks").checked);

  browser.storage.sync.set({
    lCanPreventTimeout: document.querySelector("#chkPreventTimeout").checked,
    lShowItWorksBanner: document.querySelector("#chkShowItWorks").checked
  });
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
  browser.storage.sync.set({
    iNewTimeoutLength: 30
  });
});

$("#rdbNewTimeoutLength_60").on('change', function() {
  browser.storage.sync.set({
    iNewTimeoutLength: 60 
  });
});

$("#rdbNewTimeoutLength_120").on('change', function() {
  browser.storage.sync.set({
    iNewTimeoutLength: 120 
  });
});

$("#rdbNewTimeoutLength_240").on('change', function() {
  browser.storage.sync.set({
    iNewTimeoutLength: 240 
  });
});

$("#rdbNewTimeoutLength_360").on('change', function() {
  browser.storage.sync.set({
    iNewTimeoutLength: 360 
  });
});

$("#rdbTimeoutOverrideMode_Disable").on('change', function() {
  disableTimeoutOptions();
  browser.storage.sync.set({
    sTimeoutOverrideMode: "disabletimeout"
  });
});

$("#rdbTimeoutOverrideMode_Override").on('change', function() {
  enableTimeoutOptions();

  browser.storage.sync.set({    
    sTimeoutOverrideMode: "override"
  });
});

$("#rdbTimeoutOverrideMode_None").on('change', function() {
  disableTimeoutOptions();
  browser.storage.sync.set({  
    sTimeoutOverrideMode: "nooverride"
  });

});

$("#chkShowItWorks").on('change', function() {    
  browser.storage.sync.set({
    lShowItWorksBanner: document.querySelector("#chkShowItWorks").checked 
  });
});


$("#btnResetSettingsToDefault").on('click', function() {  
 browser.storage.sync.clear();
 location.reload();
});

function handleTimeoutSelection(e) {
  console.log(e);
}

function updateOption(result) {
  console.log(result);
}

/// Visually updates the fields on the options page to match the stored settings, or the defauls
function updateFields_Callback(settings) {
  var blnItWorks = settings["lShowItWorksBanner"] === true || false;
 
  // Debug banner
  document.querySelector("#chkShowItWorks").checked = blnItWorks;

  console.log(settings);

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

function updateFields() {
  var savedSettings = browser.storage.sync.get();
  savedSettings.then(updateFields_Callback, onError);
}

// Listen for save button being pressed
document.addEventListener("DOMContentLoaded", updateFields);
