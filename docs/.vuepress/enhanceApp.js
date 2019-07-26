import Tjcds from '../../packages'
import Utils from './utils'
import Highlight from './highlight/highlight.js'
import 'ant-design-vue/dist/antd.less'
export default ({ Vue, options, router, siteData }) => {
  Vue.prototype.$utils = Utils
  Vue.use(Tjcds)
  Vue.use(Highlight)
  // 满足组件要求
  Vue.directive('permission', {
    inserted: function (el, binding, vnode) {
      const { value } = binding // 获取自定义指令传入的鉴权信息
      const resourceKeySet = ['system/permission/insert', 'system/permission/update']
      if (value && value instanceof Array && value.length > 0) {
        const permissionResources = value

        const hasPermission =
          resourceKeySet &&
          resourceKeySet.some(resource => {
            // 判断用户是否包含该元素所需权限
            return permissionResources.includes(resource)
          })

        if (!hasPermission) {
          // 权限不足
          el.parentNode && el.parentNode.removeChild(el) // 移除该dom元素
        }
      }
    }
  })
}
