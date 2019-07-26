<template>
  <a-table v-bind="$attrs" :pagination="false">
    <template slot="title">
      <h3 v-if="title">{{ title }}</h3>
      <a-alert v-if="tip" :message="tip" type="info" showIcon/>
    </template>
    <template
      v-for="key in Object.keys($scopedSlots).filter(k => !Object.keys($slots).includes(k))"
      :slot="key"
      slot-scope="props"
    >
      <slot :name="key" v-bind="props"></slot>
    </template>
    <template v-for="key in Object.keys($slots)" :slot="key">
      <slot :name="key"></slot>
    </template>
  </a-table>
</template>

<script>
export default {
  props: {
    tip: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
