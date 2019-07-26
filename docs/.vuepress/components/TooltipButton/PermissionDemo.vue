<template>
  <div>
    <tooltip-button
      v-permission="['system/permission/insert']"
      title="新增"
      type="primary"
      icon="plus"
    ></tooltip-button>
    <tooltip-button v-permission="['system/permission/update']" title="编辑" icon="edit"></tooltip-button>
    <tooltip-button
      v-permission="['system/permission/delete']"
      title="删除"
      type="danger"
      icon="delete"
    ></tooltip-button>
    <tooltip-button>不加title与a-button无异</tooltip-button>
  </div>
</template>
