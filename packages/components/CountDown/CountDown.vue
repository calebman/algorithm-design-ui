<template>
  <span>{{ format(lastTime) }}</span>
</template>

<script>
function fixedZero (val) {
  return val * 1 < 10 ? `0${val}` : val
}

export default {
  name: 'CountDown',
  props: {
    format: {
      type: Function,
      default: time => {
        const hours = 60 * 60 * 1000
        const minutes = 60 * 1000
        const h = Math.floor(time / hours)
        const m = Math.floor((time - h * hours) / minutes)
        const s = Math.floor((time - h * hours - m * minutes) / 1000)
        return `${fixedZero(h)}:${fixedZero(m)}:${fixedZero(s)}`
      }
    },
    target: {
      type: [Date, Number],
      required: true
    }
  },
  data () {
    return {
      dateTime: '0',
      originTargetTime: 0,
      lastTime: 0,
      timer: 0,
      interval: 1000
    }
  },
  created () {
    this.initTime()
    this.tick()
  },
  methods: {
    initTime () {
      let lastTime = 0
      let targetTime = 0
      this.originTargetTime = this.target
      try {
        if (Object.prototype.toString.call(this.target) === '[object Date]') {
          targetTime = this.target
        } else {
          targetTime = new Date(this.target).getTime()
        }
      } catch (e) {
        throw new Error('invalid target prop')
      }

      lastTime = targetTime - new Date().getTime()

      this.lastTime = lastTime < 0 ? 0 : lastTime
    },
    tick () {
      this.timer = setTimeout(() => {
        if (this.lastTime < this.interval) {
          clearTimeout(this.timer)
          this.lastTime = 0
          this.$emit('on-end')
        } else {
          this.lastTime -= this.interval
          this.tick()
        }
      }, this.interval)
    }
  },
  beforeUpdate () {
    if (this.originTargetTime !== this.target) {
      this.initTime()
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
