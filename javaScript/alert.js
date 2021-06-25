const fistName = document.querySelector("#firstname");
const seconndName = document.querySelector("#surname");
const Contact = document.querySelector("#contact");
const Description = document.querySelector("#description");
const submitBtm = document.querySelector("#submit");


var reportsList = [];

var REPORTS_KEY = "REPORTS";

var reportObsj = {
  
  name: String,
  surname: String,
  contact: Number,
  description: String,
  

}

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

// for(let i = 0 ; i < reportsList.length; i++) {

// }

if(reportsList) {
  document.querySelector("#templateDisplay").innerHTML = templateCompiler({report : reportsList})
}

submitBtm.addEventListener("click", function () {
  reportObsj.name = firstname.value;
  reportObsj.surname = surname.value;
  reportObsj.contact = contact.value;
  reportObsj.description = description.value;
 
  reportsList = getLocalStorageObject(REPORTS_KEY);
  if(reportsList) {
    reportsList.push(reportObsj);
    setLocalStorageObject(REPORTS_KEY, reportsList);
  } else {
    reportsList = [];
    reportsList.push(reportObsj);
    setLocalStorageObject(REPORTS_KEY, reportsList);
  }
  location.reload();
});