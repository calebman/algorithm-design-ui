<template>
  <div class="base-view" style="margin-top:10px;">
    <a-back-top/>
    <a-anchor class="toc-affix">
      <a-anchor-link
        v-for="(anchor,index) in anchors"
        :key="index"
        :href="anchor.href"
        :title="anchor.title"
      />
    </a-anchor>
    <div v-if="$slots.introduction">
      <h2>组件简介</h2>
      <slot name="introduction"></slot>
    </div>
    <div v-if="$slots.import">
      <h2>组件引入</h2>
      <slot name="import"></slot>
    </div>
    <div>
      <h2>代码演示</h2>
      <slot name="demos"></slot>
    </div>
    <div style="margin-top:30px;">
      <h2>Api</h2>
      <slot name="api"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anchors: Array
  }
}
</script>

<style lang="less">
.base-view {
  margin-top: 10px;
  h2 {
    color: #0d1a26;
    font-family: Avenir, 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    font-variant: tabular-nums;
    margin: 1.6em 0 0.6em;
    font-weight: 500;
    clear: both;
    font-size: 24px;
    line-height: 32px;
  }

  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
    bottom: 250px;
    z-index: 100000;
  }
}
</style>
