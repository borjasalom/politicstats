let themesHome = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    
    legend: {
      show: false
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
      '#f48024', '#69d2e7'
    ],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['black'],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      offsetX: 0,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Democracia', 'Energía y clima', 'LGTBI', 'Comercio internacional', 'Adicciones', 'Conflictos y paz', 'Cooperación al desarrollo',
        'Derechos digitales', 'Dependencia', 'Empleo'
      ],
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      theme: 'light',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
  },
};

let genderHome = {
  series: [228, 152],
  chartOptions: {
    chart: {
      type: 'pie',
      fontfamily: 'Roboto, sans-serif',
      toolbar: {
        show: false
      }
    },
    colors: ['#33b2df', '#d4526e'],
    labels: ['Hombres', 'Mujeres',],

    dataLabels: {
      enabled: true,
      style: {
        colors: ['white'],
        fontSize: '12px',
      },
      dropShadow: { enabled: false },
    },

    legend: {
      show: true,
      position: 'bottom',
    }
  },
}

let agesHome = {
  series: [{
    data: [21, 45, 34, 12]
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      fontfamily: 'Roboto, sans-serif',
      offsetX: 0,
      offsetY: 0,
      toolbar: {
        show: false
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: false
    },
    tooltip:{
      enabled: false
    },
    xaxis: {
      categories: ['15 - 24', '25 - 34', '35 - 54', '55 <'],
      labels: {
        style: {
          colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'],
          fontSize: '12px'
        }
      }
    }
  },
}

export { themesHome, genderHome, agesHome };