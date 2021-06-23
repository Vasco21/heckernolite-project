
const upload = document.querySelector("#upload");
const fname = document.querySelector("#fname");
const sname = document.querySelector("#sname");
const loc = document.querySelector("#loc");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const idNumber = document.querySelector("#idNumber");
const lseen = document.querySelector("#lseen");
const contacDetails = document.querySelector("#contacDetails");
const submit = document.querySelector("#submit");
var input = document.getElementById("upload");
const myPopup = document.querySelector("PopupNum")
var reportsList = [];

var REPORTS_KEY = "REPORTS";

var reportObsj = {
  image: Object,
  name: String,
  surname: String,
  location: String,
  gender: String,
  age: Number,
  contacDetails: String,
  lastSeen: Date,
  idNumber: Number

}

submit.addEventListener("click", function () {
  reportObsj.image = upload.value;
  reportObsj.lastSeen =  Date.parse(lseen.value);
  reportObsj.name = fname.value;
  reportObsj.surname = sname.value;
  reportObsj.location = loc.value;
  reportObsj.gender = gender.value;
  reportObsj.age = age.value;
  reportObsj.idNumber = idNumber.value;
  reportObsj.contacDetails = contacDetails.value;
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
function myFunction() {
  var
  var popup = document.getElementById("PopupNum");
  
}

