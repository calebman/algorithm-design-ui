<template>
  <tooltip-button-group :actions="actions"></tooltip-button-group>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          title: '查看数据',
          icon: 'search'
        },
        {
          type: 'primary',
          title: '新增数据',
          icon: 'plus',
          permission: ['system/permission/insert']
        },
        {
          type: 'primary',
          title: '编辑数据',
          icon: 'edit',
          permission: ['system/permission/update']
        },
        {
          type: 'danger',
          title: '删除数据',
          icon: 'delete',
          permission: ['system/permission/delete']
        }
      ]
    }
  }
}
</script>