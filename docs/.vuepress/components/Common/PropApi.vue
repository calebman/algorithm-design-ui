<template>
  <a-table :columns="columns" :dataSource="apiData" :pagination="false" style="width:100%">
    <a-alert v-if="tip" slot="title" :message="tip" type="info" showIcon/>
    <span slot="type" slot-scope="text" style="color:#c41d7f;">{{ text }}</span>
    <a-tag slot="required" slot-scope="text" v-if="text" color="#f50">必填</a-tag>
  </a-table>
</template>

<script>
export default {
  props: {
    componentProps: {
      type: Object,
      required: true
    },
    propsDesc: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tip: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      columns: [
        {
          title: '参数',
          dataIndex: 'name',
          width: 120
        },
        {
          title: '描述',
          dataIndex: 'desc'
        },
        {
          title: '类型',
          dataIndex: 'type',
          scopedSlots: { customRender: 'type' }
        },
        {
          title: '默认值',
          dataIndex: 'default'
        },
        {
          title: '必填',
          dataIndex: 'required',
          scopedSlots: { customRender: 'required' }
        }
      ],
      apiData: []
    }
  },
  methods: {
    formatPropType (type) {
      if (typeof type === 'undefined' || type === null) {
        return 'String'
      } else if (Object.prototype.toString.call(type) == '[object Array]') {
        return type.reduce((pre, cur) => {
          return pre.name + '|' + cur.name
        })
      } else {
        return type.name
      }
    },
    formatPropDesc (desc) {
      return desc || '';
    },
    formatPropDefaultVal (defaultVal) {
      if (typeof defaultVal === 'undefined' || defaultVal === null) {
        return '-'
      } else if (typeof defaultVal === 'function') {
        return defaultVal.toString()
      } else {
        return defaultVal.toString()
      }
    }
  },
  created () {
    for (const key in this.componentProps) {
      const item = this.componentProps[key]
      this.apiData.push({
        key: key,
        name: key,
        required: item.required,
        desc: item.desc
          ? item.desc
          : this.formatPropDesc(this.propsDesc && this.propsDesc[key]),
        type: this.formatPropType(item.type),
        default: this.formatPropDefaultVal(item.default)
      })
    }
  }
}
</script>
