<template>
  <div style="margin-bottom:10px;">
    <div class="code-box">
      <section id="components-button-demo-type" class="code-box">
        <section class="code-box-demo">
          <slot name="demo"></slot>
        </section>
        <a-collapse v-model="activeDemo">
          <a-collapse-panel :key="title" :showArrow="false">
            <section class="code-box-meta" slot="header">
              <h4>{{ title }}</h4>
              <slot name="meta"></slot>
              <a-tooltip
                v-if="activeDemo && activeDemo.length > 0 && activeDemo[0] === title"
                title="收起代码"
              >
                <a-icon style="color:#929292;" type="close-square" class="code-expand-icon" />
              </a-tooltip>
              <a-tooltip v-else title="查看代码">
                <a-icon style="color:#929292;" type="code" class="code-expand-icon" />
              </a-tooltip>
            </section>
            <section class="highlight-wrapper">
              <a-tooltip title="复制代码">
                <a-icon
                  style="color:#929292;"
                  type="copy"
                  class="code-box-code-copy"
                  @click="copyCode"
                />
              </a-tooltip>
              <pre v-highlight>
                <code class="vue">{{code}}</code>
              </pre>
            </section>
          </a-collapse-panel>
        </a-collapse>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeDemo: null
    };
  },
  methods: {
    copyCode() {
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", this.code);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        this.$message.info("代码已复制到剪贴板");
      }
      document.body.removeChild(input);
    }
  }
};
</script>

<style lang="less">
.code-box:target {
  border: 1px solid #1890ff;
}
.code-box {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  width: 100%;
  position: relative;
  transition: all 0.2s;
  .code-box-demo {
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
  }
  .code-box-meta {
    position: relative;
    padding: 18px 32px;
    border-radius: 0 0 2px 2px;
    transition: background-color 0.4s;
    width: 100%;
    font-size: 14px;
  }
  .code-box .code-expand-icon {
    position: absolute;
    right: 16px;
    bottom: 23px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }
  .code-box-meta > h4 {
    position: absolute;
    top: -14px;
    padding: 1px 8px;
    color: #777;
    border-radius: 2px 2px 0 0;
    background: #fff;
    font-size: 14px;
    width: auto;
  }
  .highlight-wrapper {
    overflow: auto;
    border-radius: 0 0 2px 2px;
  }
  .code-box-code-copy {
    opacity: 1;
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
  pre {
    width: auto !important;
    overflow: auto !important;
    background: #fff !important;
    margin: 0 !important;
    padding: 0 !important;
    code {
      color: #795548 !important;
      border: none !important;
      background: #fff !important;
      font-size: 15px !important;
    }
  }
}
</style>