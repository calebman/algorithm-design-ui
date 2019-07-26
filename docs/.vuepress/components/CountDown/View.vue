<template>
  <Common-BaseView :anchors="anchors">
    <div slot="demos">
      <Common-TemplateCode id="base" title="基础用法" :code="baseDemoCode">
        <CountDown-BaseDemo slot="demo"/>
        <template slot="meta">
          <p>倒计时组件的基础使用</p>
        </template>
      </Common-TemplateCode>
      <Common-TemplateCode id="message" title="结合业务" :code="messageDemoCode">
        <CountDown-MessageDemo slot="demo"/>
        <template slot="meta">
          <p>结合短信超时重发业务使用组件</p>
        </template>
      </Common-TemplateCode>
    </div>
    <CountDown-Api slot="api" id="api"/>
  </Common-BaseView>
</template>
<script>
import baseDemoCode from '!!raw-loader!./BaseDemo.vue'
import messageDemoCode from '!!raw-loader!./MessageDemo.vue'
export default {
  data() {
    return {
      anchors: [
        { href: '#base', title: '基础用法' },
        { href: '#message', title: '结合业务' },
        { href: '#api', title: 'API' }
      ],
      baseDemoCode,
      messageDemoCode
    }
  }
}
</script>
