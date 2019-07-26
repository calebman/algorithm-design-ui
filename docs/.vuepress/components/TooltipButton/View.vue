<template>
  <Common-BaseView :anchors="anchors">
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <TooltipButton-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>基于a-button扩展了title参数用作提示</p>
        </template>
      </Common-TemplateCode>
      <Common-TemplateCode id="permission" title="带权限用法" :code="permissionDemo">
        <TooltipButton-PermissionDemo slot="demo"/>
        <template slot="meta">
          <p>可以使用v-permission指令实现按钮元素级别权限</p>
        </template>
      </Common-TemplateCode>
    </div>
    <TooltipButton-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
import permissionDemo from '!!raw-loader!./PermissionDemo.vue'
export default {
  data() {
    return {
      anchors: [
        { href: '#base', title: '基础用法' },
        { href: '#permission', title: '带权限用法' },
        { href: '#api', title: 'API' }
      ],
      baseDemoCode,
      permissionDemo
    }
  }
}
</script>
