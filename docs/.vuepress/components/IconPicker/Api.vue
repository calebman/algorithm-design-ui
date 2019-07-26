<template>
  <Common-PropApi :componentProps="componentProps" :propsDesc="propsDesc"></Common-PropApi>
</template>

<script>
export default {
  data() {
    return {
      propsDesc: {
        value: '可用于双绑，选中图标内容'
      },
      componentProps: this.$utils.getComponentProps('IconPicker')
    }
  }
}
</script>
