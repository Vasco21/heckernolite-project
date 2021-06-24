
const upload = document.querySelector("#upload");
const fname = document.querySelector("#fname");
const sname = document.querySelector("#sname");
const loc = document.querySelector("#loc");
const gender = document.querySelector("#gender");
const age = document.querySelector("#age");
const idNumber = document.querySelector("#idNumber");
const lseen = document.querySelector("#lseen");
const contacDetails = document.querySelector("#contacDetails");
const Email = document.querySelector("#Email")
const submit = document.querySelector("#submit");
var input = document.getElementById("upload");
// const clothElem = document.querySelector(".cloths");
const clothElem = document.querySelector(".clothing")

//  console.log(clothElem.value)
// alert(clothElem.value)
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
  idNumber: Number,
  Email: String,
  clothing: String,
  

}

submit.addEventListener("click", function () {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  // alert(months[new Date(lseen.value).getMonth()]);


  console.log(months[new Date(lseen.value).getMonth()])

  reportObsj.image = upload.value;
  reportObsj.lastSeen = months[new Date(lseen.value).getMonth()];
  reportObsj.name = fname.value;
  reportObsj.surname = sname.value;
  reportObsj.location = loc.value;
  reportObsj.gender = gender.value;
  reportObsj.age = age.value;
  reportObsj.idNumber = idNumber.value;
  reportObsj.contacDetails = contacDetails.value;
  reportObsj.Email = Email.value;
  reportObsj.clothing = clothElem.value;
 
  


  
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

