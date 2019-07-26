<template>
  <Common-BaseView :anchors="anchors">
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <CountTo-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>渐变数组件的基础使用</p>
        </template>
      </Common-TemplateCode>
      <Common-TemplateCode id="style" title="结合样式" :code="styleDemoCode">
        <CountTo-StyleDemo slot="demo"/>
        <template slot="meta">
          <p>加上卡片样式</p>
        </template>
      </Common-TemplateCode>
    </div>
    <CountTo-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
import styleDemoCode from '!!raw-loader!./StyleDemo.vue'
export default {
  data() {
    return {
      anchors: [
        { href: '#base', title: '基础用法' },
        { href: '#style', title: '结合样式' },
        { href: '#api', title: 'API' }
      ],
      baseDemoCode,
      styleDemoCode
    }
  }
}
</script>
