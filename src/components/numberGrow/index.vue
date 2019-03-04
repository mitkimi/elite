<template>
  <div class="number-grow-warp">
    <span ref="numberGrow" :data-time="time" :data-value="value">0</span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    time: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 9999
    }
  },
  methods: {
    numberGrow (ele) {
      let _this = this
      let step = (_this.value * 10) / (_this.time * 1000)
      let current = 0
      let start = 0
      let t = setInterval(function () {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start
        ele.innerHTML = parseInt(current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,'))
      }, 10)
    }
  },
  mounted () {
    setTimeout(() => {
      this.numberGrow(this.$refs.numberGrow)
    }, 500)
  }
}
</script>

<style>
.number-grow-warp{
  transform: translateZ(0);
  display:inline;
}
</style>
