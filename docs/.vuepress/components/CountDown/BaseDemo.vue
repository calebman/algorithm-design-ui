<template>
  <section>
    <count-down :target="new Date().getTime() + 60 * 60 * 1000"/>
    <a-divider type="vertical"/>
    <count-down :target="new Date().getTime() + 10 * 1000" @on-end="handleCountDownEnd"/>
  </section>
</template>

<script>
export default {
  methods: {
    handleCountDownEnd() {
      console.log('十秒倒计时完成')
    },
    format(time) {
      return `剩余${parseInt(time / 1000)}秒`
    }
  }
}
</script>