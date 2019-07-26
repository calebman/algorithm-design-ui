<template>
  <Common-PropApi :componentProps="componentProps" :propsDesc="propsDesc"></Common-PropApi>
</template>

<script>
export default {
  data() {
    return {
      propsDesc: {
        startVal: "变动起始值",
        endVal: "变动终止值",
        duration: "变动动画持续时间",
        autoplay: "立即加载动画",
        decimals: "保留小数位数",
        decimal: "小数分隔符",
        separator: "数字分隔符",
        prefix: "数字前缀",
        suffix: "数字后缀",
        useEasing: "启用平滑过渡函数",
        easingFn: "平滑过渡函数"
      },
      componentProps: this.$utils.getComponentProps('CountTo')
    };
  }
};
</script>
