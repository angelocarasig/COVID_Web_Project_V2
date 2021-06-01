const CHART = document.getElementById("lineChart");
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        //EACH DATASET WOULD REPRESENT A COUNTRY, CAN WRITE A LOOP FOR EACH ONE WITH GET COMMANDS FOR EACH
        //Documentation for mroe in-depth notes: https://www.chartjs.org/docs/latest/charts/line.html
        datasets: [
            {   //notes on SECOND dataset
                label: "My First dataset",
                fill: false, 
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },             
                {
                    label: "My Second dataset", //Most likely would name it after each country
                    fill: true, //Area under line
                    lineTension: 0.1, //Curvature between each point
                    backgroundColor: "rgba(75, 192, 192, 0.4)", //color if fill = true

                    //EACH OF THE BORDER CONFIGS ARE THE ACTUAL LINE GRAPH ITSELF
                    borderColor: "rgba(75, 192, 192, 1)", 
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",

                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHitRadius: 10,
                    data: [5, 3, 12, 65, 23, 12, 15],
                }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});