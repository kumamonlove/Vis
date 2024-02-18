(function() 
{
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
    color: ['#ffffff', '#d7eaff', '#b2d4f9', '#72a5dd', '#4d7cc1','#2159aa'],
  
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#fff'
        }
      }
    },
    textStyle: {
      color: '#fff' ,
    },
    legend: {
      data: ['5环', '6环', '7环', '8环', '9环','10环'],
      pageTextStyle: {
        color:"white"
      },
      selectorLabel: {
        color:"#fff"
      }
    },
  
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['第一月', '第二月', '第三月', '第四月', '第五月', '第六月', '第七月']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '5环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
        color:'#ffffff'
        },
        emphasis: {
          focus: 'series'
        },
        data: [34, 31, 21, 14, 12, 7, 3]
      },
      {
        name: '6环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
        color:'#d7eaff'
        },
        emphasis: {
          focus: 'series'
        },
        data: [66, 52, 47, 36, 14, 13, 9]
      },
      {
        name: '7环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
       color:'#b2d4f9'
        },
        emphasis: {
          focus: 'series'
        },
        data: [32, 41, 56, 46, 50, 32, 45]
      },
      {
        name: '8环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
               color:'#72a5dd'
        },
        emphasis: {
          focus: 'series'
        },
        data: [16, 34, 37, 49, 44, 52, 58]
      },
      {
        name: '9环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
               color:'#4d7cc1'
        },
        emphasis: {
          focus: 'series'
        },
        data: [12, 17, 20, 27, 28, 34, 35]
      },
          {
        name: '10环',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
             color:'#2159aa'
        },
        emphasis: {
          focus: 'series'
        },
        data: [3, 6, 11, 15, 13, 21, 24]
      }
    ]
  };
  myChart.setOption(option);
})();


(function() 
{
  var myChart = echarts.init(document.querySelector(".p1 .chart"));
  // prettier-ignore
const hours = [
  '24', '1', '2', '3', '4', '5', '6',
  '7', '8', '9', '10', '11',
  '12', '13', '14', '15', '16', '17',
  '18', '19', '20', '21', '22', '23'
];
// prettier-ignore
const days = [
  '10', '9', '8',
  '7', '6','5'
];
// prettier-ignore
const data = [[0, 1, 0],[0, 2, 1],[0, 3, 2],[0, 4, 3],[0, 5, 2],[0, 6, 1],[0, 7, 0],[0, 8, 3],[0, 9, 4],[0, 10, 4],[0, 12, 5],[0, 13, 4],[0, 14, 3],[0, 15, 3],[0, 16, 6],[0, 17, 3],[0, 18, 4],[0, 19, 12],[0, 20, 5],[0, 21, 4],[0, 22, 9],[0, 23, 7],[0, 24, 8]
,[1, 1, 5],[1, 2, 3],[1, 3, 4],[1, 4, 5],[1, 5, 3],[1, 6, 5],[1, 7, 4],[1, 8, 5],[1, 9, 3],[1, 10, 9],[1, 11, 3],[1, 12, 7],[1, 13, 9],[1, 14, 6],[1, 15, 7],[1, 16, 11],[1, 17, 8],[1, 18, 9],[1, 19,11],[1, 20, 14],[1, 21, 9],[1, 22, 12],[1, 23, 14],[1, 24, 9]
,[2,1,5],[2,2,5],[2,3,6],[2,4,7],[2,5,8],[2,6,11],[2,7,8],[2,8,6],[2,9,14],[2,10,9],[2,11,8],[2,12,12],[2,13,15],[2,14,14],[2,15,8],[2,16,16],[2,17,9],[2,18,19],[2,19,14],[2,20,18],[2,21,20],[2,22,20],[2,23,16],[2,24,22]
,[3,1,14],[3,2,8],[3,3,10],[3,4,9],[3,5,13],[3,6,11],[3,7,8],[3,8,12],[3,9,14],[3,10,13],[3,11,17],[3,12,12],[3,13,15],[3,14,9],[3,15,10],[3,16,11],[3,17,9],[3,18,10],[3,19,14],[3,20,9],[3,21,9],[3,22,10],[3,23,16],[3,24,19]
,[4,1,25],[4,2,16],[4,3,25],[4,4,13],[4,5,13],[4,6,11],[4,7,15],[4,8,12],[4,9,14],[4,10,9],[4,11,12],[4,12,9],[4,13,6],[4,14,9],[4,15,12],[4,16,11],[4,17,9],[4,18,10],[4,19,3],[4,20,6],[4,21,4],[4,22,3],[4,23,2],[4,24,4]
,[5,1,12],[5,2,14],[5,3,8],[5,4,9],[5,5,8],[5,6,8],[5,7,6],[5,8,3],[5,9,4],[5,10,9],[5,11,5],[5,12,5],[5,13,3],[5,14,2],[5,15,4],[5,16,2],[5,17,3],[5,18,7],[5,19,3],[5,20,2],[5,21,2],[5,22,1],[5,23,2],[5,24,0]

]
var option = {
legend: {
  data: ['命中次数'],
  left: 'right',
  pageTextStyle: {
    color: "rgba(157, 38, 38, 1)"
  }
},
polar: {},
    textStyle: {
    color: '#fff' ,
  },
  
tooltip: {
  formatter: function (params) {
    return (
      ' 第 ' +
      hours[params.value[1]] +
      ' 次训练 ' +
      params.value[2] +
      ' 次射中 ' +
      days[params.value[0]] +
      ' 环 '
    );
  }
},
angleAxis: {
  type: 'category',
  data: hours,
  boundaryGap: false,
  splitLine: {
    show: true
  },
  axisLine: {
    show: false
  }
},
radiusAxis: {
  type: 'category',
  data: days,
  axisLine: {
    show: false
  },
  axisLabel: {
    rotate: 45
  }
},
series: [
  {
    name: '命中次数',
    type: 'scatter',
    coordinateSystem: 'polar',
    symbolSize: function (val) {
      return val[2] * 2;
    },
    itemStyle: {
      color: "#5584cc"
    },
    data: data,
    animationDelay: function (idx) {
      return idx * 5;
    }
  }
]
};
  myChart.setOption(option);
})();


(function() 
{
  var myChart = echarts.init(document.querySelector(".p11 .chart"));
  // prettier-ignore
let dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24'];
// prettier-ignore
let data = [53, 57, 49, 56, 47, 42, 47, 36, 32, 38, 45, 39, 43, 37, 33, 29, 35, 37, 34, 27, 29, 31, 30, 35];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {

  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    textStyle: {
      color: '#fff' ,
    },
    axisLabel: {
      color: '#999'
    }
  },
  
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  textStyle: {
    color: '#fff' ,
  },
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#a9d4ff' },
          { offset: 0.5, color: '#5382cb' },
          { offset: 1, color: '#02359a' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#02359a' },
            { offset: 0.7, color: '#5382cb' },
            { offset: 1, color: '#a9d4ff' }
          ])
        }
      },
      data: data
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on('click', function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  myChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});
  myChart.setOption(option);
})();


