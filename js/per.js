var myChart1 = echarts.init(document.getElementById('zdyezb'));
option1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '20',
        orient: 'horizontal',
        textStyle: {
            color: '#fff',
        },
        data: ['单位网上经办', '网厅服务', '微信服务', '自助一体机', 'APP服务']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
            { value: 4852, name: '单位网上经办' },
            { value: 2410, name: '网厅服务' },
            { value: 1414, name: '微信服务' },
            { value: 412, name: '自助一体机' },
            { value: 1542, name: 'APP服务' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart1.setOption(option1);