function onError(error) {
  console.log(`Error: ${error}`);
}

function doSave(e) {
  e.preventDefault();
  browser.storage.sync.set({
    lCanPreventTimeout: document.querySelector("#chkPreventTimeout").checked
  });    
}

function updateOption(result) {
  console.log(result);
}

function restoreOptions() {
  function setCurrentChoice(result) {
    var newval = result.lCanPreventTimeout || false;
    console.log("lCanPreventTimeout: " + newval);
    if (newval == true) {
      document.querySelector("#chkPreventTimeout").checked = true;
      console.log("yes"); 
    } else {
      console.log("no");
      document.querySelector("#chkPreventTimeout").checked = false;
    }
  }

  var getting = browser.storage.sync.get("lCanPreventTimeout");
  getting.then(setCurrentChoice, onError);
}

// Listen for save button being pressed
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", doSave);