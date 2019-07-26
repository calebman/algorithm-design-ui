<template>
  <icon-picker v-model="pickerIcon" @change="handleIconChange"/>
</template>

<script>
export default {
  data() {
    return {
      pickerIcon: null
    }
  },
  methods: {
    handleIconChange(icon) {
      console.log(icon)
    }
  }
}
</script>
