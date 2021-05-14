let primaryColor = "#6C63FF";
let darkColor = '#2F2E41';

let topicsChartConf = {
  chart: {
    type: 'bar',
    fontFamily: 'Roboto, sans-serif',
    foreColor: darkColor,
    redrawOnWindowResize: true,
    toolbar: { show: false },
    width: '100%'
  },
  colors: [primaryColor],
  labels: [],
  dataLabels: { enabled: false },
  legend: { show: false },
  stroke: { show: false },
  xaxis: { labels: { rotate: -45, offsetY: 5 } },
  yaxis: { 
    tickAmount: 11,
    title: { text: 'Numero de Preguntas' },
  },
  tooltip: {
    x: { show: false },
    y: { title: { formatter: () => 'Numero Preguntas:' }},
    marker: { show: false },
  },
  responsive: [{
    breakpoint: 641,
    options: {
      xaxis: { 
        labels: { rotate: -90, offsetY: 0 }
      },
    },
  }]
}

let genderChartConf = {
  chart: {
    type: 'donut',
    fontfamily: 'Roboto, sans-serif',
    toolbar: { show: false }
  },
  colors: ['#FF6584', "#6C63FF", ],
  labels: ['Mujeres', 'Hombres'],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.config.series[opt.seriesIndex]
    },
    style: { colors: ['white'], fontSize: '12px' },
    dropShadow: { enabled: false },
  },
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    inverseOrder: true,
    itemMargin: { horizontal: 10, vertical: 10 },
  },
  tooltip: {
    theme: "light",
    fillSeriesColor: false,
    x: { show: false },
    marker: { show: false },
  },
}

let ageChartConf = {
  chart: {
    type: 'bar',
    fontfamily: 'Roboto, sans-serif',
    offsetX: 0,
    offsetY: 0,
    toolbar: { show: false }
  },
  colors: ["#6C63FF"],
  plotOptions: {
    bar: {
      columnWidth: '50%',
      distributed: true,
    }
  },
  dataLabels: { enabled: true },
  legend: { show: false },
  tooltip:{ enabled: false },
  yaxis: {
    title: { text: 'Numero Diputados' },
  },
  xaxis: {
    categories: ['25 - 34', '35 - 44', '45 - 55', '55 <'],
    labels: {
      style: { fontSize: '12px' }
    }
  }
}

let groupsChartConf = {
  chart: {
    type: 'donut',
    fontfamily: 'Roboto, sans-serif',
    toolbar: { show: false }
  },
  colors: [],
  labels: [],
  dataLabels: { enabled: false },
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    inverseOrder: false,
    itemMargin: { horizontal: 10, vertical: 10 },
  },
  tooltip:{ enabled: false },
}


export {topicsChartConf, genderChartConf, ageChartConf, groupsChartConf};