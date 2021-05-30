let myChart = document.getElementById('BarChart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels:['Australia', 'USA', 'China', 'United Kingdom', 'Russia', 'India'],
        datasets:[{
            label: 'Cases',
            data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            // All dataset properties: https://www.chartjs.org/docs/latest/charts/bar.html

            //backgroundColor:'green', Set row color for each bar

            /* backgroundColor:[
                'color1',
                'color2',
                etc.
            ], Set each array to each data value */

            //borderWidth: 4,      //Border, needs to be with a given color to work
            //borderColor: '#777',  //Border color

            // hoverBorderWidth: 3,
            // hoverBorderColor: 'black',
        }]
    },
    options: {}
});