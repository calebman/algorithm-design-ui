import TooltipButton from './TooltipButton.vue'
import TooltipButtonGroup from './TooltipButtonGroup.vue'
TooltipButton.install = function (Vue) {
  Vue.component(TooltipButton.name, TooltipButton)
}
TooltipButtonGroup.install = function (Vue) {
  Vue.component(TooltipButtonGroup.name, TooltipButtonGroup)
}
export { TooltipButton, TooltipButtonGroup }
