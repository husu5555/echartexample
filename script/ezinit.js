  // JS
  var chart = echarts.init(document.getElementById('ezmap'));
  chart.setOption({
      series: [{
          type: 'map',
          map: 'ez'
      }]
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