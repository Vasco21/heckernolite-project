var xValues = ["Missing", "Found", "Looking" ]
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