<template>
  <div>
    <Common-PropApi :componentProps="componentProps" :propsDesc="propsDesc"></Common-PropApi>
    <Common-EnventApi :events="events"></Common-EnventApi>
    <Common-SlotApi :slots="slots"></Common-SlotApi>
  </div>
</template>

<script>
export default {
  data() {
    return {
      propsDesc: {
        data: '树结构的源数据',
        expandAlias: '树节点展开标志位的别名key',
        childrenAlias: '树子节点的别名key',
        horizontal: '是否水平排布',
        collapsable: '树子节点是否可以伸展'
      },
      componentProps: this.$utils.getComponentProps('OrgTree'),
      events: [{ name: 'on-expand', desc: '节点展开事件', func: 'function(data)', params: ['data：节点数据'] }],
      slots: [
        {
          name: 'default',
          desc: '树节点插槽，使用slot-scope="{ renderData, parentData, renderIndex }"传递节点信息',
          params: ['renderData：节点数据', 'parentData：父节点数据', 'renderIndex：节点下标']
        }
      ]
    }
  }
}
</script>
