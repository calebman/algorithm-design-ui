import CountDown from './CountDown.vue'
CountDown.install = function (Vue) {
  Vue.component(CountDown.name, CountDown)
}
export {
  CountDown
}
