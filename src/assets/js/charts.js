import json from '../json/home.json'

let primaryColor = "#6C63FF";
let darkColor = '#2F2E41';

let topicsData = [];
let topicsLabel = [];

for (let i = 0; i < 10; i++) {
  topicsData.push(json.topics[i].numQuestions);
  topicsLabel.push(json.topics[i].shortname);
}

let genderData = [
  json.gender.female,
  json.gender.male
];

let ages = [
  json.ages.ages25_34,
  json.ages.ages35_44,
  json.ages.ages45_54,
  json.ages.ages55More,
]

let themesHome = {
  series: [{
    data: topicsData
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      fontFamily: 'Roboto, sans-serif',
      foreColor: darkColor,
      redrawOnWindowResize: true,
      toolbar: { show: false },
      width: '100%'
    },
    colors: [primaryColor],
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { show: false },
    xaxis: { 
      categories: topicsLabel,
      labels: {
        rotate: -45,
        offsetY: 5,
      },
    },
    yaxis: { 
      tickAmount: 11,
      title: {
        text: 'Numero de Preguntas',
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        title: {
          formatter: () => 'Numero Preguntas:'
        }
      },
      marker: {
        show: false,
      },
    },
    responsive: [{
      breakpoint: 641,
      options: {
        xaxis: { 
          categories: topicsLabel,
          labels: {
            rotate: -90,
            offsetY: 0,
          }
        
        },
      },
    }]
  },
};

let genderHome = {
  series: genderData,
  chartOptions: {
    chart: {
      type: 'donut',
      fontfamily: 'Roboto, sans-serif',
      toolbar: {
        show: false
      }
    },
    colors: ['#FF6584', "#6C63FF", ],
    labels: ['Mujeres', 'Hombres'],

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
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      inverseOrder: true,
      itemMargin: {
        horizontal: 10,
        vertical: 10
      },
    },
    tooltip: {
      theme: "light",
      fillSeriesColor: false,
      x: { show: false },
      marker: {
        show: false,
      },
    },
  },
}

let agesHome = {
  series: [{
    data: ages
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
    colors: ["#6C63FF"],
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
    yaxis: {
      title: {
        text: 'Numero Diputados',
    },
    },
    xaxis: {
      categories: ['25 - 34', '35 - 44', '45 - 55', '55 <'],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  },
}

export { themesHome, genderHome, agesHome };