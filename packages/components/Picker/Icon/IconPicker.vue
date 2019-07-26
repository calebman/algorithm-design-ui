<template>
  <a-dropdown :trigger="['hover']" placement="bottomCenter" v-model="visible">
    <a-card slot="overlay">
      <a-tabs class="icon-drop-picker">
        <a-tab-pane v-for="(v, i) in icons" :tab="v.title" :key="i">
          <ul>
            <li
              v-for="(icon, key) in v.icons"
              :key="`${v.title}-${key}`"
              :class="{ 'active': selectedIcon === icon }"
            >
              <a-icon :type="icon" :style="{ fontSize: '36px' }" @click="handleSelectedIcon(icon)"/>
            </li>
          </ul>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <span class="icon-drop-button" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <span v-if="selectedIcon"><a-icon :type="selectedIcon" style="margin-right: 4px"/>图标被选中</span>
      <span v-else>请选择一个图标</span>
      <a-icon @click="handleClear" :type="operIcon" :theme="operIcon === 'down' ? 'outlined' : 'filled'"/>
    </span>
  </a-dropdown>
</template>

<script>
import icons from './icons'
export default {
  name: 'IconPicker',
  data () {
    return {
      visible: false,
      selectedIcon: null,
      icons,
      operIcon: 'down'
    }
  },
  methods: {
    handleSelectedIcon (icon) {
      this.visible = false
      this.selectedIcon = icon
      this.$emit('input', icon)
      this.$emit('change', icon)
    },
    handleClear () {
      this.visible = false
      this.selectedIcon = null
      this.$emit('input', null)
      this.$emit('change', null)
      this.operIcon = 'down'
    },
    handleMouseEnter () {
      this.operIcon = this.selectedIcon ? 'close-circle' : 'down'
    },
    handleMouseLeave () {
      this.operIcon = 'down'
    }
  },
  watch: {
    value: {
      handler (val) {
        this.selectedIcon = val
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.icon-drop-picker {
  ul {
    list-style: none;
    padding: 0;
    overflow-y: scroll;
    height: 250px;
    li {
      display: inline-block;
      padding: 5px;
      margin: 5px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        box-shadow: 0 0 5px 2px #888888;
      }
    }
  }
}
.ant-btn:hover, .ant-btn:focus {
 color: rgba(0, 0, 0, 0.65);
}
.icon-drop-button {
  position: relative;
  display: inline-block;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  height: 32px;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 15px;
  border-radius: 4px;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  border: 1px solid #d9d9d9;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  background-color: #fff;
}
</style>
