<!-- TooltipButtonGroup -->
<template>
  <div>
    <span v-for="(action,index) in actions" :key="index" v-permission="action.permission">
      <tooltip-button
        v-bind="action"
        :ref="'action' + index"
        @click="$emit('click', action)">
        {{ action.text }}
      </tooltip-button>
      <a-divider
        v-if="index < (actions.length - 1) && !hiddenBtn[`action${(index + 1)}`]"
        type="vertical"/>
    </span>
  </div>
</template>

<script>
import TooltipButton from './TooltipButton'
export default {
  name: 'TooltipButtonGroup',
  components: {
    TooltipButton
  },
  props: {
    actions: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      hiddenBtn: {}
    }
  },
  mounted () {
    this.actions.forEach((action, index) => {
      if (this.$refs[`action${index}`][0].$el.offsetParent === null) {
        this.$set(this.hiddenBtn, `action${index}`, true)
      }
    })
  }
}
</script>
