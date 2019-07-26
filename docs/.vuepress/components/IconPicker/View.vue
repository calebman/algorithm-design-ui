<template>
  <Common-BaseView :anchors="anchors">
    <div slot="introduction">
      <ul>
        <li>基于Ant Design Icon的图标选择器</li>
      </ul>
    </div>
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <IconPicker-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>双向绑定选中图标或者监听change事件</p>
        </template>
      </Common-TemplateCode>
    </div>
    <IconPicker-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
export default {
  data() {
    return {
      anchors: [{ href: '#base', title: '基础用法' }, { href: '#api', title: 'API' }],
      baseDemoCode
    }
  }
}
</script>
