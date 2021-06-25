var reportsList = [];

// var modifiedReportsList = [];

var REPORTS_KEY = "REPORTS";

var FoundTemplate = document.querySelector(".FoundTemplate").innerHTML;

var templateCompiler = Handlebars.compile(FoundTemplate);

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


const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";