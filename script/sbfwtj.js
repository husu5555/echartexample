var myChart = echarts.init(document.getElementById('sbfwtj'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['蒸发量', '平均温度']
    },
    xAxis: [{
        type: 'category',
        name: '日期',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '申报服务访问次数',
            min: 0,
            max: 500,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '查询服务访问次数',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5]
        }
    ]
};

myChart.setOption(option);