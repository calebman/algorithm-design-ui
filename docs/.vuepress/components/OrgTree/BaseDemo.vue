<template>
  <org-tree :data="treeData">
    <template slot-scope="{ renderData, parentData, renderIndex }">
      <span>{{renderData.text}}</span>
    </template>
  </org-tree>
</template>

<script>
export default {
  data() {
    return {
      treeData: {
        icon: 'home',
        text: '天津交通运输委员会',
        children: [
          {
            text: '港航局',
            children: [{ text: '综合运输管理处' }, { text: '巡察工作办公室' }, { text: '统战处' }]
          },
          {
            text: '委领导',
            children: [{ text: '巡察组' }, { text: '离退休干部处' }, { text: '安全监督处' }]
          },
          {
            text: '组织处',
            children: [{ text: '综合规划处' }]
          }
        ]
      }
    }
  }
}
</script>
