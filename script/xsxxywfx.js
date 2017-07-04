var myChart4 = echarts.init(document.getElementById('xsxxyw'));
var colors = ['#5793f3', '#d14a61', '#675bba'];
option4 = {
    color: colors,
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['线上业务办理量', '线下业务办理量', '环比分析'],
        textStyle: {
            color: '#ffffff'
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        nameLocation: 'start',
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: '10'
            },
            rotate: 30
        },
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    }],
    yAxis: [{
            type: 'value',
            name: '次数',
            min: 0,
            max: 1800,
            interval: 300,
            axisLabel: {
                formatter: '{value}',
                lineStyle: {
                    color: "#fff"
                }
            },
            nameTextStyle: {
                color: '#fff',
                fontSize: 10
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },

            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }

        },
        {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value} %',
                lineStyle: {
                    color: "#fff"
                }
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        }
    ],
    series: [{
            name: '线上业务办理量',
            type: 'bar',
            data: [200, 490, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            }
        },
        {
            name: '线下业务办理量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
                data: [
                    { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                    { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                ]
            }
        },
        {
            name: '环比分析',
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
                data: [
                    { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                    { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                ]
            }
        }
    ]
};
myChart4.setOption(option4);