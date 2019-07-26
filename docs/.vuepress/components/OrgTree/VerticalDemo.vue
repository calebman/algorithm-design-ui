<template>
  <org-tree :data="treeData" :horizontal="false" collapsable>
    <template slot-scope="{ renderData, parentData, renderIndex }">
      <a-icon v-if="renderData.icon" :type="renderData.icon"></a-icon>
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
        text: '系统菜单',
        children: [
          {
            icon: 'wechat',
            text: '仪表盘',
            children: [{ text: '控制台' }, { text: '统计页' }, { text: '个人中心' }]
          },
          {
            icon: 'apple',
            text: '系统管理',
            children: [{ text: '用户管理' }, { text: '角色管理' }, { text: '菜单管理' }]
          },
          {
            icon: 'google',
            text: '其他',
            children: [{ text: '谷歌搜索' }]
          }
        ]
      }
    }
  }
}
</script>
