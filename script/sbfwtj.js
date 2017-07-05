var myChart3 = echarts.init(document.getElementById('sbfwtj'));
var colors = ['#5793f3', '#d14a61'];
option3 = {
    color: colors,
    xAxis: [{
        type: 'category',
        name: '日期',
        data: ['06-17', '06-18', '06-19', '06-20', '06-21', '06-22', '06-23', '06-24', '06-25', '06-26'],
        axisPointer: {
            type: 'shadow',

        },
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
            interval: 0,
            rotate: -30
        },
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    }],
    yAxis: [{
            type: 'value',
            name: '申报服务访问次数',
            min: 0,
            max: 500,
            interval: 100,
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
            name: '查询服务访问次数',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value}',
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
            name: '申报服务访问次数',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
        },
        {
            name: '查询服务访问次数',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5]
        }
    ]
};

myChart3.setOption(option3);