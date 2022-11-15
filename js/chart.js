let viewsChart, fSize;
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
      data: [190, 150, 170, 250, 180, 240, 190],
      backgroundColor: '#6C77EC',
      borderRadius: 10,
    },
    {
      label: 'Прирост',
      data: [50, 35, 45, 35, 35, 30, 45],
      backgroundColor: '#F67E7E',
      borderRadius: 10,
    },
  ]
};

updateChart();
$(window).on('resize', () => updateChart());

function updateChart() {
  const windowWidth = $(window).width();

  if (windowWidth < 1280) {
    fSize = 8; 
  } else if (windowWidth < 1440) {
    fSize = 12; 
  } else {
    fSize = 16;
  }

  if (viewsChart) {
    viewsChart.destroy();
    viewsChart = null;
  }

  viewsChart = new Chart(
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
                size: fSize
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
                size: fSize
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
}
