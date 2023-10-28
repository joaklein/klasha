let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let yValues = [6, 4.5, 5, 3, 2.8, 3, 2, 4, 3, 2.2, 5.5, 5, 3.2, 3.5, 6];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(247,18,60,1.0)",
            borderColor: "rgba(247,18,60,1.0)",
            data: yValues,
            pointRadius: 0,
        }]
    },
    options: {
        responsive: true,
        legend: { display: false },
        scales: {
            yAxes: [{
                ticks: { min: 0, max: 8 },
                display: false
            }],
            xAxes: [{ display: false }]
        }
    }
});

document.querySelector('.show-aside-icon').addEventListener('click', () => {
    document.querySelector('aside').classList.add('aside-show')
})

document.querySelector('.nav-hide').addEventListener('click', () => {
    document.querySelector('aside').classList.remove('aside-show')
})