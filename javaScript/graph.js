// var xValues = ["Missing", "spotted" ]
// var yValues = [55, 49, 44];
// var barColors = [
//   "red",
//   "blue",
//    "yellow"
//  ];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }],
//     }
//   }
// });

  var data;
// alert(data)
if(localStorage['REPORTS']){
data = JSON.parse(localStorage['REPORTS'])
}

// alert(typeof data)

 var xArray  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// data.foreach((elem) =>{
//   alert("dsdsds"+elem)

// })
var mapForGraph = {}

for(var i=0; i<data.length; i++){
  // console.log(data[i].lastSeen)
  console.log((data[i].lastSeen))
  if(!mapForGraph[data[i].lastSeen]){
    mapForGraph[data[i].lastSeen] = 0

  }
  mapForGraph[data[i].lastSeen]++
// if(data[i].lastSeen){
// mapForGraph = data[i].lastSeen

}
 console.log(mapForGraph)

// console.log(Object.values(mapForGraph))
var mapObj = {
  xArray : Object.keys(mapForGraph),
  yArray : Object.values(mapForGraph)
}
// mapForGraph[i].lastSeen++





new Chart("myChartOne", {
  type: "line",
  data: {
    labels: mapObj.xArray,
    datasets: [{ 
      data:data.length ,
      borderColor: "blue",
      fill: false
    },
    { 
      data: [2, 4, 5, 10],
      borderColor: "red",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});