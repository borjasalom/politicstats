import homeJSON from '../json/homeApp.json'
import groupsJSON from '../json/groupsApp.json'

import {topicsChartConf, genderChartConf, ageChartConf, groupsChartConf} from './chartsConf.js'

let homeTopicsData = [];
let homeTopicsChartConf = topicsChartConf;

for (let i = 0; i < 10; i++) {
  homeTopicsData.push(homeJSON.topics[i].numQuestions);
  topicsChartConf.labels.push(homeJSON.topics[i].shortname);
}

let homeGenderData = [
  homeJSON.gender.female,
  homeJSON.gender.male
];

let homeAgesData = [
  homeJSON.ages.ages25_34,
  homeJSON.ages.ages35_44,
  homeJSON.ages.ages45_54,
  homeJSON.ages.ages55More,
]


let homeTopicsChart = {
  series: [{ data: homeTopicsData }], 
  chartOptions: homeTopicsChartConf
};

let homeGenderChart = {
  series: homeGenderData,
  chartOptions: genderChartConf
}

let homeAgesChart = {
  series: [{ data: homeAgesData }], 
  chartOptions: ageChartConf
}

let groupsDiputies = [];

for (const group of groupsJSON) {
  
  groupsDiputies.push({
    numero: group.deputies,
    name: group.shortname,
    color: group.color,
  })
}

groupsDiputies.sort(function( a, b ) {
  if ( a.numero > b.numero ){
    return -1;
  }
  if ( a.numero < b.numero ){
    return 1;
  }
  return 0;
})

let dataDiputies = [];

for (const group of groupsDiputies) {
  dataDiputies.push(group.numero);
  groupsChartConf.colors.push(group.color);
  groupsChartConf.labels.push(group.name + ": " + group.numero);
}

let groupsChart = {
  series: dataDiputies,
  chartOptions: groupsChartConf,
}

export { homeTopicsChart, homeGenderChart, homeAgesChart, groupsChart };