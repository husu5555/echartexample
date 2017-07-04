var myChart = echarts.init(document.getElementById('dyxsxxyw'));
var cellSize = [60, 40];
var pieRadius = 18;

function getVirtulData() {
    var date = +echarts.number.parseDate('2017-06-01');
    var end = +echarts.number.parseDate('2017-07-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

function getPieSeries(scatterData, chart) {
    return echarts.util.map(scatterData, function(item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            radius: pieRadius,
            data: [
                { name: '线上业务量', value: Math.round(Math.random() * 24) },
                { name: '线下业务量', value: Math.round(Math.random() * 24) }
            ]
        };
    });
}

function getPieSeriesUpdate(scatterData, chart) {
    return echarts.util.map(scatterData, function(item, index) {
        var center = chart.convertToPixel('calendar', item);
        return {
            id: index + 'pie',
            center: center
        };
    });
}

var scatterData = getVirtulData();

option = {
    tooltip: {},
    legend: {
        data: ['线上业务量', '线下业务量'],
        orient: 'vertical',
        right: 20,
        bottom: 30,
        textStyle: {
            color: '#ffffff'
        }
    },
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
            show: false,
            textStyle: {
                fontSize: 30
            }
        },
        dayLabel: {
            margin: 5,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            textStyle: {
                color: '#ffffff'
            }
        },
        monthLabel: {
            show: true,
            textStyle: {
                color: '#ffffff'
            }
        },
        range: ['2017-06']
    },
    series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function(params) {
                    return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                textStyle: {
                    color: '#000',
                    fontSize: 14
                }
            }
        },
        data: scatterData
    }]
};
myChart.setOption(option);
if (!echarts.inNode) {
    var pieInitialized;
    setTimeout(function() {
        pieInitialized = true;
        myChart.setOption({
            series: getPieSeries(scatterData, myChart)
        });
    }, 10);

    echarts.onresize = function() {
        if (pieInitialized) {
            myChart.setOption({
                series: getPieSeriesUpdate(scatterData, myChart)
            });
        }
    };
}