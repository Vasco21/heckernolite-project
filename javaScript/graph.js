var xValues = ["Missing", "Found", "searching" ]
var yValues = [55, 49, 44];
var barColors = [
  "red",
  "blue",
  "yellow"
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});


var xArray = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChartOne", {
  type: "line",
  data: {
    labels: xArray,
    datasets: [{ 
      data: dataList() ,
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});