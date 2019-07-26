<template>
  <Common-BaseView :anchors="anchors">
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <TooltipButtonGroup-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>配置一组按钮，按钮中间会用竖线隔开</p>
        </template>
      </Common-TemplateCode>
      <Common-TemplateCode id="permission" title="结合权限控制" :code="permissionDemoCode">
        <TooltipButtonGroup-PermissionDemo slot="demo"/>
        <template slot="meta">
          <p>使用permission传入权限数组进行按钮元素的权限控制</p>
        </template>
      </Common-TemplateCode>
    </div>
    <TooltipButtonGroup-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
import permissionDemoCode from '!!raw-loader!./PermissionDemo.vue'
export default {
  data() {
    return {
      anchors: [
        { href: '#base', title: '基础用法' },
        { href: '#permission', title: '结合权限控制' },
        { href: '#api', title: 'API' }
      ],
      baseDemoCode,
      permissionDemoCode
    }
  }
}
</script>
