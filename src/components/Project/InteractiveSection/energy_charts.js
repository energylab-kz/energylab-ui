document.addEventListener('DOMContentLoaded', function () {
    const consumed_energy_chart = Highcharts.chart('consumed_chart_container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Showing in the column chart generated and consumed energy in Kazakhstan for 2022'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        title: {
          text: 'Energy (kWh)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size: 10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} kWh</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Consumed Energy',
        data: [700, 650, 550, 500, 450, 400, 350, 400, 500, 550, 600, 750]
      }, {
        name: 'Generated Energy',
        data: [900, 950, 800, 700, 1100, 1000, 920, 800, 900, 950, 1000, 1100]
      }],
      colors: ['#C0C0C0', '#0C090A']
    });
  });
  