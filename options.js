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

function updateOption(result) {
  console.log(result);
}

function updateFields_Callback(settings) {
  var blnPreventTimeout = settings["lCanPreventTimeout"] === true || false;
  var blnItWorks = settings["lShowItWorksBanner"] === true || false;

  console.log("Updating prevent timeout to: " + blnPreventTimeout);
  console.log("Updating show it works to: " + blnItWorks);

  document.querySelector("#chkPreventTimeout").checked = blnPreventTimeout;
  document.querySelector("#chkShowItWorks").checked = blnItWorks;

}

function updateFields() {
  var savedSettings = browser.storage.sync.get();
  savedSettings.then(updateFields_Callback, onError);
}

// Listen for save button being pressed
document.addEventListener("DOMContentLoaded", updateFields);
document.querySelector("form").addEventListener("submit", doSave);