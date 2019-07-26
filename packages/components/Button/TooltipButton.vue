<!-- TooltipButton -->
<template>
  <a-tooltip :title="title" >
    <a-button v-bind="$attrs" v-on="$listeners">
      <slot/>
    </a-button>
  </a-tooltip>
</template>

<script>
export default {
  name: 'TooltipButton',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
