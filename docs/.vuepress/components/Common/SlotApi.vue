<template>
  <Common-BaseApi :columns="columns" :dataSource="slots" :title="title" v-bind="$attrs">
    <ul slot="params" slot-scope="{params}" v-if="params && params[0]">
      <li v-for="(item,index) in params[0]" :key="index">{{ item }}</li>
    </ul>
  </Common-BaseApi>
</template>

<script>
export default {
  props: {
    slots: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Slots'
    }
  },
  data() {
    return {
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          width: 180
        },
        {
          title: '说明',
          dataIndex: 'desc'
        },
        {
          title: '参数描述',
          dataIndex: 'params',
          scopedSlots: { customRender: 'params' }
        }
      ]
    }
  }
}
</script>
