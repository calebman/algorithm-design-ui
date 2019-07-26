
# 快速上手

## 基本信息

algorithm-design-ui是一个基于**[Ant Design Vue](https://vue.ant.design)**封装，用于直观的表现各种算法执行流程的组件库

## 如何使用

algorithm-design-ui的引用和大部分Vue组件库并无差别，使用上包括完整引入与局部导入

### 导入组件库

```bash
npm i algorithm-design-ui --save
```
完整引入
```javascript
import Vue from 'vue'
import AlgoDesign from 'algorithm-design-ui'
import App from './App'
import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false
Vue.use(AlgoDesign)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

局部导入 **注意局部导入需要自行引入Ant Design Vue**
```javascript
import Vue from 'vue'
import { CountDown, CountTo } from 'algorithm-design-ui'
import App from './App'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(CountDown)
Vue.use(CountTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```