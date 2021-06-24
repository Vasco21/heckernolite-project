var reportsList = [];

// var modifiedReportsList = [];

var REPORTS_KEY = "REPORTS";

var reportsTemplate = document.querySelector(".reportsTemplate").innerHTML;

var templateCompiler = Handlebars.compile(reportsTemplate);

var setLocalStorageObject = function(key, Object) {
  window.localStorage.setItem(key, JSON.stringify(Object));
}

var getLocalStorageObject = function(key) {
  let temp = window.localStorage.getItem(key);
  if (temp == null) {
      return null;
  }
  return JSON.parse(temp);
}

reportsList = getLocalStorageObject(REPORTS_KEY);

for(let i = 0 ; i < reportsList.length; i++) {

}

if(reportsList) {
  document.querySelector("#templateDisplay").innerHTML = templateCompiler({report : reportsList})
}