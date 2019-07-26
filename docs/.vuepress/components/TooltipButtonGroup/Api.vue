<template>
  <div>
    <Common-PropApi :componentProps="componentProps" :propsDesc="propsDesc"></Common-PropApi>
    <Common-PropApi tip="actions子项配置，支持tooltip-button的所有参数配置" :componentProps="actionProps"></Common-PropApi>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propsDesc: {
        actions: '按钮组的配置信息数组'
      },
      componentProps: this.$utils.getComponentProps('TooltipButtonGroup'),
      actionProps: {
        text: {
          type: String,
          desc: '按钮显示文本'
        },
        permission: {
          type: Array,
          desc: '结合v-permission指令的权限数组'
        }
      }
    }
  }
}
</script>
