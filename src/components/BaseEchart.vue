<template>
  <div ref="echart" style="height:400px"></div>
</template>

<script>
import echarts from 'echarts'
import { addListener, removeListener } from 'resize-detector' //用于检测屏幕发生变化的库
import { debounce } from 'lodash' //resize时间会多次触发，进行防抖提高性能
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
     // option(val) {   (解决性能) 更新数据后重新对options进行赋值：this.option = {...this.option}
     //   this.chart.setOption(val)
     // }
    option: {
      handler(val) {
        this.chart.setOption(val)
      },
      deep: true  // 比较消耗性能
    }
  },
  created() {
    this.resize = debounce(this.resize, 300)
  },
  mounted() {
    this.renderChart()
    addListener(this.$refs.echart, this.resize)
    this.$once('hook:beforeDestroy', () => {
      removeListener(this.$refs.echart, this.resize)
      this.destroy()
    })
  },
  methods: {
    resize() {
      console.log('resize')
      this.chart.resize()
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.echart)
      // this.chart.setOption(this.option)
    },
    destroy() {
      this.chart.dispose()
      this.chart = null
    }
  }
}
</script>
<style lang="less">
.echart {
  width: 100%;
  height: 100%;
}
</style>