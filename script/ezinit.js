  // JS
  var chart = echarts.init(document.getElementById('ezmap'));
  chart.setOption({
      legend: {
          orient: 'vertical',
          right: '40',
          bottom: '40',
          data: ['在线企业', '离线企业'],
          textStyle: {
              color: '#ffffff'
          }
      },
      series: [{
              name: '在线企业',
              type: 'map',
              map: 'ez',
              roam: false,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              data: [
                  { name: '梁子湖区', value: Math.round(Math.random() * 1000) },
                  { name: '华容区', value: Math.round(Math.random() * 1000) },
                  { name: '鄂城区', value: Math.round(Math.random() * 1000) }
              ]
          },
          {
              name: '离线企业',
              type: 'map',
              map: 'ez',
              roam: false,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              data: [
                  { name: '梁子湖区', value: Math.round(Math.random() * 1000) }
              ]
          }

      ],

  });

  // JSON
  $.getJSON('../js/ezmap.json', function(data) {
      echarts.registerMap('ez', data);
      var chart = echarts.init(document.getElementById('ezmap'));
      chart.setOption({
          series: [{
              type: 'map',
              map: 'ezmap'
          }]
      });
  });