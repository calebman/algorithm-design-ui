<template>
  <Common-PropApi :componentProps="componentProps" :propsDesc="propsDesc" bordered></Common-PropApi>
</template>

<script>
export default {
  data () {
    return {
      propsDesc: {
        format: '格式化函数',
        target: '目标时间'
      },
      componentProps: this.$utils.getComponentProps('CountDown')
    }
  }
}
</script>
