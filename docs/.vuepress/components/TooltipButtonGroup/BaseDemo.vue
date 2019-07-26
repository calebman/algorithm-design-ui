<template>
  <tooltip-button-group :actions="actions"></tooltip-button-group>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          type: 'primary',
          title: '下载',
          icon: 'cloud-download'
        },
        {
          type: 'danger',
          title: '删除',
          icon: 'delete'
        },
        {
          title: 'Default',
          text: '带文本',
          icon: 'cloud'
        },
        {
          type: 'dashed',
          title: 'Primary',
          text: '不带图标'
        }
      ]
    }
  }
}
</script>