<template>
    <div>
      <div class="echart" id="echart" ref="mychart"></div>
    </div>
  </template>

<script>
// echarts相关
import echarts from 'echarts'

require('echarts/lib/chart/line')

export default {
  name: 'r-echarts-line',
  data () {
    return {
      // myChart实例
      myChart: {},
      option: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['营销', '联盟广告', '视频广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }

    }
  },
  mounted () {
    this.setEchart()
  },
  methods: {
    setEchart () {
      const dom = this.$refs.mychart
      this.myChart = echarts.init(dom)
      this.myChart.setOption(this.option)
    }

  }
}
</script>

  <style scoped lang="less">
  #echart {
    width: 100%;
    height: 260px;
  }
  </style>
