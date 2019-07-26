// 引入图片预览组件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
// 引入高德地图
import { TooltipButton, TooltipButtonGroup } from './components/Button'
import { CountDown } from './components/CountDown'
import { CountTo } from './components/CountTo'
import { IconPicker } from './components/Picker'
import { OrgTree } from './components/Tree'
const components = [
  TooltipButton,
  TooltipButtonGroup,
  CountDown,
  CountTo,
  IconPicker,
  OrgTree
]

const Tjcds = {
  install (Vue, options) {
    if (options && options.Antd) {
      Vue.use(options.Antd)
    } else {
      import('ant-design-vue').then(moudule => {
        Vue.use(moudule.default)
      })
    }
    Vue.use(Viewer)
    Object.values(components).forEach(component => {
      Vue.use(component)
    })
  }
}

export default Tjcds

export {
  TooltipButton,
  TooltipButtonGroup,
  CountDown,
  CountTo,
  IconPicker,
  OrgTree
}
