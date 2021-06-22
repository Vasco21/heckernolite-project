// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

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
  // for(let i = 0 ; i < reportsList.length; i++) {
  //   reportsList[i].image = URL.createObjectURL(reportsList[i].image);
  //   modifiedReportsList.push(reportsList)
  // }
  
  document.querySelector("#templateDisplay").innerHTML = templateCompiler({report : reportsList})
}

URL.createObjectURL
// navToggle.addEventListener("click", function () {
// //   console.log(links.classList);
// //   console.log(links.classList.contains("random"));
// //   console.log(links.classList.contains("links"));
// //   if (links.classList.contains("show-links")) {
// //     links.classList.remove("show-links");
// //   } else {
// //     links.classList.add("show-links");
// //   }
//   links.classList.toggle("show-links");
// });

