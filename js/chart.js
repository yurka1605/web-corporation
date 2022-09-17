const ctx = document.getElementById('myChart');
const labels = [
  '25 июля',
  '26 июля',
  '27 июля',
  '28 июля',
  '29 июля',
  '30 июля',
  '31 июля',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Было',
      data: [210, 170, 190, 270, 200, 260, 210],
      backgroundColor: '#6C77EC',
      borderRadius: 10,
    },
    {
      label: 'Прирост',
      data: [30, 15, 25, 15, 15, 10, 25],
      backgroundColor: '#F67E7E',
      borderRadius: 10,
    },
  ]
};

const viewsChart = new Chart(
  document.getElementById('viewsChart'),
  {
    type: 'bar',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          alignToPixels: true,
          autoSkip: true,
          autoSkipPadding: 14,
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            padding: 12,
            font: {
              size: 16
            },
            color: '#3F4156',
          },
        },
        y: {
          alignToPixels: true,
          stacked: true,
          maxTicksLimit: 3,
          position: 'right',
          ticks: {
            padding: 14,
            stepSize: 100,
            font: {
              size: 16
            },
            color: '#3F4156',
          },
          grid: {
            color: '#DEE0F4',
            drawBorder: false,
          }
        }
      }
    }
  }
);
