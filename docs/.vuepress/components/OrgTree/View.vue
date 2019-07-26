<template>
  <Common-BaseView :anchors="anchors">
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <OrgTree-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>组织架构树的基本用法</p>
        </template>
      </Common-TemplateCode>
      <Common-TemplateCode id="vertical" title="垂直方向" :code="verticalDemoCode">
        <OrgTree-VerticalDemo slot="demo"/>
        <template slot="meta">
          <p>使用图标，配置为垂直方向，可伸展</p>
        </template>
      </Common-TemplateCode>
    </div>
    <OrgTree-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
import verticalDemoCode from '!!raw-loader!./VerticalDemo.vue'
export default {
  data() {
    return {
      anchors: [
        { href: '#base', title: '基础用法' },
        { href: '#vertical', title: '垂直方向' },
        { href: '#api', title: 'API' }
      ],
      baseDemoCode,
      verticalDemoCode
    }
  }
}
</script>
