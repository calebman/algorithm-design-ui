<template>
  <div>
    <Common-PropApi tip="支持a-button的所有参数配置" :componentProps="componentProps" :propsDesc="propsDesc"></Common-PropApi>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propsDesc: {
        title: 'Tooltip显示的文本内容'
      },
      componentProps: this.$utils.getComponentProps('TooltipButton')
    }
  }
}
</script>
