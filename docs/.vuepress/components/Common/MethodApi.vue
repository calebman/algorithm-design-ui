<template>
  <Common-BaseApi :columns="columns" :dataSource="methods" :title="title" v-bind="$attrs">
    <span slot="method" slot-scope="{params}" style="color:#c41d7f;">{{ params[0] }}</span>
    <ul slot="params" slot-scope="{params}" v-if="params && params[0]">
      <li v-for="(item,index) in params[0]" :key="index">{{ item }}</li>
    </ul>
  </Common-BaseApi>
</template>

<script>
export default {
  props: {
    methods: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: 'Methods'
    }
  },
  data() {
    return {
      columns: [
        {
          title: '方法',
          dataIndex: 'name',
          width: 220,
          scopedSlots: { customRender: 'method' }
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
