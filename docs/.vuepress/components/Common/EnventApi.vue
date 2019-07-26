<template>
  <Common-BaseApi :columns="columns" :dataSource="events" :title="title" v-bind="$attrs">
    <span slot="func" slot-scope="{params}" style="color:#c41d7f;">{{ params[0] }}</span>
    <ul slot="params" slot-scope="{params}" v-if="params && params[0]">
      <li v-for="(item,index) in params[0]" :key="index">{{ item }}</li>
    </ul>
  </Common-BaseApi>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Events'
    }
  },
  data() {
    return {
      columns: [
        {
          title: '事件名称',
          dataIndex: 'name',
          width: 180
        },
        {
          title: '说明',
          dataIndex: 'desc'
        },
        {
          title: '回调参数',
          dataIndex: 'func',
          scopedSlots: { customRender: 'func' }
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
